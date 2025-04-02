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

const App = () => {
  window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault(); // Avoid scrolling the page
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
  });

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
  const movesQueue: MoveDirection[] = [];
  const moveClock = new THREE.Clock(false);
  const player = createPlayer();
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
    const map = new THREE.Group();
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

    function addRows() {
      metadata.forEach((rowData, index) => {
        const rowIndex = index + 1;

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
    }

    function initializeMap() {
      for (let rowIndex = 0; rowIndex > -5; rowIndex--) {
        const grass = createGrass(rowIndex);
        map.add(grass);
      }

      addRows();
    }

    function initializeGame() {
      initializeMap();
    }

    function animateVehicles() {
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
    }

    function animate() {
      animateVehicles();
      animatePlayer();

      renderer.render(scene, camera);
    }

    initializeGame();

    renderer.setAnimationLoop(animate);

    return () => {
      if (renderer) {
        renderer.dispose();
      }
    };
  });

  function queueMove(direction: MoveDirection) {
    const isValidMove = endsUpInValidPosition(
      {
        rowIndex: position.currentRow,
        tileIndex: position.currentTile,
      },
      [...movesQueue, direction]
    );

    if (!isValidMove) return;

    movesQueue.push(direction);
  }

  function stepCompleted() {
    const direction = movesQueue.shift();

    if (direction === "forward") position.currentRow += 1;
    if (direction === "backward") position.currentRow -= 1;
    if (direction === "left") position.currentTile -= 1;
    if (direction === "right") position.currentTile += 1;
  }

  function animatePlayer() {
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
  }

  function setPosition(progress: number) {
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
  }

  function setRotation(progress: number) {
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
  }

  function calculateFinalPosition(
    currentPosition: { rowIndex: number; tileIndex: number },
    moves: MoveDirection[]
  ) {
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
  }

  function endsUpInValidPosition(
    currentPosition: { rowIndex: number; tileIndex: number },
    moves: MoveDirection[]
  ) {
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
  }

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
    </>
  );
};

export default App;
