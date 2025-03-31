import { useEffect, useRef } from "react";
import { useThreeTools } from "../lib/hooks/useThreeTools";
import {
  minTileIndex,
  maxTileIndex,
  tileSize,
} from "@/lib/constants/constants";
import * as THREE from "three";

const App = () => {
  const sceneRef = useRef<HTMLCanvasElement | null>(null);
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

  useEffect(() => {
    if (!sceneRef.current) return;

    const scene = new THREE.Scene();
    const renderer = createRenderer(sceneRef.current);
    const player = createPlayer();
    const map = new THREE.Group();
    const ambientLight = new THREE.AmbientLight();
    const dirLight = createDirectionalLight();
    const camera = createCamera();
    const metadata = createMetaData();
    const clock = new THREE.Clock();

    scene.add(player);
    scene.add(map);
    scene.add(ambientLight);
    dirLight.position.set(-100, -100, 200);
    scene.add(dirLight);
    scene.add(camera);

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

  return <canvas ref={sceneRef} className="h-full" />;
};

export default App;
