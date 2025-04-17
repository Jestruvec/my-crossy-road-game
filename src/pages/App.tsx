import { useEffect, useRef } from "react";
import { useThreeTools } from "../lib/hooks/useThreeTools";
import {
  minTileIndex,
  maxTileIndex,
  tileSize,
} from "@/lib/constants/constants";
import * as THREE from "three";
import { MoveDirection } from "@/lib/types/MoveDirection";
import {
  FaArrowUp,
  FaArrowDown,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import { Row, RowType } from "@/lib/types/RowType";
import { randomElement } from "@/lib/helpers/randomElement";

const App = () => {
  const {
    createRenderer,
    createCamera,
    createPlayer,
    createGrass,
    createMetaData,
    createTree,
    createRoad,
    createCar,
    createTruck,
    createDirectionalLight,
  } = useThreeTools();

  const sceneRef = useRef<HTMLCanvasElement | null>(null);
  const resultContainer = useRef<HTMLDivElement | null>(null);
  const finalScoreDOM = useRef<HTMLSpanElement | null>(null);
  const movesQueue: MoveDirection[] = [];
  const moveClock = new THREE.Clock(false);
  const player = createPlayer();
  const map = new THREE.Group();
  const metadata = createMetaData();

  const position: {
    currentRow: number;
    currentTile: number;
  } = {
    currentRow: 0,
    currentTile: 0,
  };

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const renderer = createRenderer(sceneRef.current);
    const ambientLight = new THREE.AmbientLight();
    const dirLight = createDirectionalLight();
    const camera = createCamera();
    const clock = new THREE.Clock();

    scene.add(player);
    scene.add(map);
    scene.add(ambientLight);
    dirLight.position.set(-100, -100, 200);
    dirLight.target = player;
    player.add(dirLight);
    player.add(camera);

    const handleResize = () => {
      const viewRatio = window.innerWidth / window.innerHeight;
      const size = 300;
      const width = viewRatio < 1 ? size : size * viewRatio;
      const height = viewRatio < 1 ? size / viewRatio : size;

      camera.left = -width / 2;
      camera.right = width / 2;
      camera.top = height / 2;
      camera.bottom = -height / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const animateVehicles = () => {
      const delta = clock.getDelta();

      // Animate cars and trucks
      metadata.forEach((rowData) => {
        if (rowData.type === "car" || rowData.type === "truck") {
          const beginningOfRow = (minTileIndex - 2) * tileSize;
          const endOfRow = (maxTileIndex + 2) * tileSize;

          rowData.vehicles.forEach(({ ref }) => {
            if (!ref) throw Error("Vehicle reference is missing");

            if (rowData.direction) {
              ref.position.x =
                ref.position.x > endOfRow
                  ? beginningOfRow
                  : ref.position.x + rowData.speed * delta;
            } else {
              ref.position.x =
                ref.position.x < beginningOfRow
                  ? endOfRow
                  : ref.position.x - rowData.speed * delta;
            }
          });
        }
      });
    };

    const animatePlayer = () => {
      if (!movesQueue.length) return;

      if (!moveClock.running) moveClock.start();

      const stepTime = 0.2; // Seconds it takes to take a step
      const progress = Math.min(1, moveClock.getElapsedTime() / stepTime);

      setPosition(progress);
      setRotation(progress);

      // Once a step has ended
      if (progress >= 1) {
        stepCompleted();
        moveClock.stop();
      }
    };

    const hitTest = () => {
      const row = metadata[position.currentRow - 1];
      if (!row) return;

      if (row.type === "car" || row.type === "truck") {
        const playerBoundingBox = new THREE.Box3();
        playerBoundingBox.setFromObject(player);

        row.vehicles.forEach(({ ref }) => {
          if (!ref) throw Error("Vehicle reference is missing");

          const vehicleBoundingBox = new THREE.Box3();
          vehicleBoundingBox.setFromObject(ref);

          if (playerBoundingBox.intersectsBox(vehicleBoundingBox)) {
            if (!resultContainer.current || !finalScoreDOM.current) return;
            resultContainer.current.style.visibility = "visible";
            finalScoreDOM.current.innerText = position.currentRow.toString();
          }
        });
      }
    };

    const animate = () => {
      animateVehicles();
      animatePlayer();
      hitTest();

      renderer.render(scene, camera);
    };

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();
        queueMove("forward");
      } else if (event.key === "ArrowDown") {
        event.preventDefault();
        queueMove("backward");
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        queueMove("left");
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        queueMove("right");
      }
    };

    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("resize", handleResize);

    initializeGame();

    renderer.setAnimationLoop(animate);

    return () => {
      if (renderer) {
        window.removeEventListener("keydown", handleKeydown);
        window.removeEventListener("resize", handleResize);
        renderer.dispose();
      }
    };
  });

  //GAME INITIALIZATION

  const initializeGame = () => {
    initializePlayer();
    initializeMap();

    // Initialize UI
    if (finalScoreDOM.current) finalScoreDOM.current.innerText = "0";
    if (resultContainer.current)
      resultContainer.current.style.visibility = "hidden";
  };

  const initializeMap = () => {
    // Remove all rows
    metadata.length = 0;
    map.remove(...map.children);

    // Add new rows
    for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
      const grass = createGrass(rowIndex);
      map.add(grass);
    }

    addRows();
  };

  const initializePlayer = () => {
    player.position.x = 0;
    player.position.y = 0;
    player.children[0].position.z = 0;

    position.currentRow = 0;
    position.currentTile = 0;

    movesQueue.length = 0;
  };

  //MAP GENERATION

  const addRows = () => {
    const newMetadata = generateRows(20);

    const startIndex = metadata.length;
    metadata.push(...newMetadata);

    newMetadata.forEach((rowData, index) => {
      const rowIndex = startIndex + index + 1;

      if (rowData.type === "forest") {
        const row = createGrass(rowIndex);

        rowData.trees.forEach(({ tileIndex, height }) => {
          const three = createTree(tileIndex, height);
          row.add(three);
        });

        map.add(row);
      }

      if (rowData.type === "car") {
        const row = createRoad(rowIndex);

        rowData.vehicles.forEach((vehicle) => {
          const car = createCar(
            vehicle.initialTileIndex,
            rowData.direction,
            vehicle.color
          );

          vehicle.ref = car;
          row.add(car);
        });

        map.add(row);
      }

      if (rowData.type === "truck") {
        const row = createRoad(rowIndex);

        rowData.vehicles.forEach((vehicle) => {
          const truck = createTruck(
            vehicle.initialTileIndex,
            rowData.direction,
            vehicle.color
          );
          vehicle.ref = truck;
          row.add(truck);
        });

        map.add(row);
      }
    });
  };

  const generateRows = (amount: number): Row[] => {
    const rows: Row[] = [];
    for (let i = 0; i < amount; i++) {
      const rowData = generateRow();
      rows.push(rowData);
    }
    return rows;
  };

  const generateRow = (): Row => {
    const type: RowType = randomElement(["car", "truck", "forest"]);
    if (type === "car") return generateCarLaneMetadata();
    if (type === "truck") return generateTruckLaneMetadata();
    return generateForesMetadata();
  };

  const generateForesMetadata = (): Row => {
    const occupiedTiles = new Set<number>();
    const trees = Array.from({ length: 4 }, () => {
      let tileIndex;
      do {
        tileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
      } while (occupiedTiles.has(tileIndex));
      occupiedTiles.add(tileIndex);

      const height = randomElement([20, 45, 60]);

      return { tileIndex, height };
    });

    return { type: "forest", trees };
  };

  const generateCarLaneMetadata = (): Row => {
    const direction = randomElement([true, false]);
    const speed = randomElement([125, 156, 188]);

    const occupiedTiles = new Set<number>();

    const vehicles = Array.from({ length: 3 }, () => {
      let initialTileIndex;
      do {
        initialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
      } while (occupiedTiles.has(initialTileIndex));
      occupiedTiles.add(initialTileIndex - 1);
      occupiedTiles.add(initialTileIndex);
      occupiedTiles.add(initialTileIndex + 1);

      const color: THREE.ColorRepresentation = randomElement([
        0xa52523, 0xbdb638, 0x78b14b,
      ]);

      return { initialTileIndex, color };
    });

    return { type: "car", direction, speed, vehicles };
  };

  const generateTruckLaneMetadata = (): Row => {
    const direction = randomElement([true, false]);
    const speed = randomElement([125, 156, 188]);

    const occupiedTiles = new Set<number>();

    const vehicles = Array.from({ length: 2 }, () => {
      let initialTileIndex;
      do {
        initialTileIndex = THREE.MathUtils.randInt(minTileIndex, maxTileIndex);
      } while (occupiedTiles.has(initialTileIndex));
      occupiedTiles.add(initialTileIndex - 2);
      occupiedTiles.add(initialTileIndex - 1);
      occupiedTiles.add(initialTileIndex);
      occupiedTiles.add(initialTileIndex + 1);
      occupiedTiles.add(initialTileIndex + 2);

      const color: THREE.ColorRepresentation = randomElement([
        0xa52523, 0xbdb638, 0x78b14b,
      ]);

      return { initialTileIndex, color };
    });

    return { type: "truck", direction, speed, vehicles };
  };

  //PLAYER MOVEMENT

  const queueMove = (direction: MoveDirection) => {
    const isValidMove = endsUpInValidPosition(
      {
        rowIndex: position.currentRow,
        tileIndex: position.currentTile,
      },
      [...movesQueue, direction]
    );

    if (!isValidMove) return;

    movesQueue.push(direction);
  };

  const stepCompleted = () => {
    const direction = movesQueue.shift();

    if (direction === "forward") position.currentRow += 1;
    if (direction === "backward") position.currentRow -= 1;
    if (direction === "left") position.currentTile -= 1;
    if (direction === "right") position.currentTile += 1;

    // Add new rows if the player is running out of them
    if (position.currentRow > metadata.length - 10) addRows();

    const scoreDOM = document.getElementById("score");
    if (scoreDOM) scoreDOM.innerText = position.currentRow.toString();
  };

  const setPosition = (progress: number) => {
    const startX = position.currentTile * tileSize;
    const startY = position.currentRow * tileSize;
    let endX = startX;
    let endY = startY;

    if (movesQueue[0] === "left") endX -= tileSize;
    if (movesQueue[0] === "right") endX += tileSize;
    if (movesQueue[0] === "forward") endY += tileSize;
    if (movesQueue[0] === "backward") endY -= tileSize;

    player.position.x = THREE.MathUtils.lerp(startX, endX, progress);
    player.position.y = THREE.MathUtils.lerp(startY, endY, progress);
    player.children[0].position.z = Math.sin(progress * Math.PI) * 8;
  };

  const setRotation = (progress: number) => {
    let endRotation = 0;
    if (movesQueue[0] == "forward") endRotation = 0;
    if (movesQueue[0] == "left") endRotation = Math.PI / 2;
    if (movesQueue[0] == "right") endRotation = -Math.PI / 2;
    if (movesQueue[0] == "backward") endRotation = Math.PI;

    player.children[0].rotation.z = THREE.MathUtils.lerp(
      player.children[0].rotation.z,
      endRotation,
      progress
    );
  };

  const calculateFinalPosition = (
    currentPosition: { rowIndex: number; tileIndex: number },
    moves: MoveDirection[]
  ) => {
    return moves.reduce((position, direction) => {
      if (direction === "forward")
        return {
          rowIndex: position.rowIndex + 1,
          tileIndex: position.tileIndex,
        };
      if (direction === "backward")
        return {
          rowIndex: position.rowIndex - 1,
          tileIndex: position.tileIndex,
        };
      if (direction === "left")
        return {
          rowIndex: position.rowIndex,
          tileIndex: position.tileIndex - 1,
        };
      if (direction === "right")
        return {
          rowIndex: position.rowIndex,
          tileIndex: position.tileIndex + 1,
        };
      return position;
    }, currentPosition);
  };

  const endsUpInValidPosition = (
    currentPosition: { rowIndex: number; tileIndex: number },
    moves: MoveDirection[]
  ) => {
    // Calculate where the player would end up after the move
    const finalPosition = calculateFinalPosition(currentPosition, moves);

    // Detect if we hit the edge of the board
    if (
      finalPosition.rowIndex === -1 ||
      finalPosition.tileIndex === minTileIndex - 1 ||
      finalPosition.tileIndex === maxTileIndex + 1
    ) {
      // Invalid move, ignore move command
      return false;
    }

    // Detect if we hit a tree
    const finalRow = metadata[finalPosition.rowIndex - 1];
    if (
      finalRow &&
      finalRow.type === "forest" &&
      finalRow.trees.some((tree) => tree.tileIndex === finalPosition.tileIndex)
    ) {
      // Invalid move, ignore move command
      return false;
    }

    return true;
  };

  return (
    <>
      <canvas ref={sceneRef} className="h-full" />

      <div id="controls">
        <div>
          <button
            onClick={() => queueMove("forward")}
            id="forward"
            className="flex justify-center items-center"
          >
            <FaArrowUp />
          </button>
          <button
            onClick={() => queueMove("left")}
            id="left"
            className="flex justify-center items-center"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={() => queueMove("backward")}
            id="backward"
            className="flex justify-center items-center"
          >
            <FaArrowDown />
          </button>
          <button
            onClick={() => queueMove("right")}
            id="right"
            className="flex justify-center items-center"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div id="score">0</div>

      <div id="result-container" ref={resultContainer}>
        <div id="result">
          <h1>Game Over</h1>
          <p>
            Your score: <span id="final-score" ref={finalScoreDOM}></span>
          </p>
          <button id="retry" onClick={initializeGame}>
            Retry
          </button>
        </div>
      </div>
    </>
  );
};

export default App;
