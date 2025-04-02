import * as THREE from "three";
import { tilesPerRow, tileSize } from "../constants/constants";
import { Row } from "../types/RowType";

export const useThreeTools = () => {
  const createRenderer = (canvas: HTMLCanvasElement) => {
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: canvas,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMap.enabled = true;

    return renderer;
  };

  const createCamera = () => {
    const size = 300;
    const viewRatio = window.innerWidth / window.innerHeight;
    const width = viewRatio < 1 ? size : size * viewRatio;
    const height = viewRatio < 1 ? size / viewRatio : size;

    const newCamera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      100,
      900
    );

    newCamera.up.set(0, 0, 1);
    newCamera.position.set(300, -300, 300);
    newCamera.lookAt(0, 0, 0);

    return newCamera;
  };

  const createPlayer = () => {
    const player = new THREE.Group();
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(15, 15, 20),
      new THREE.MeshLambertMaterial({
        color: "white",
        flatShading: true,
      })
    );
    body.castShadow = true;
    body.receiveShadow = true;
    body.position.z = 10;
    player.add(body);

    const cap = new THREE.Mesh(
      new THREE.BoxGeometry(2, 4, 2),
      new THREE.MeshLambertMaterial({
        color: 0xf0619a,
        flatShading: true,
      })
    );
    cap.position.z = 21;
    cap.castShadow = true;
    cap.receiveShadow = true;
    player.add(cap);

    const playerContainer = new THREE.Group();
    playerContainer.add(player);

    return playerContainer;
  };

  const createGrass = (rowIndex: number) => {
    const grass = new THREE.Group();
    grass.position.y = rowIndex * tileSize;

    const foundation = new THREE.Mesh(
      new THREE.BoxGeometry(tilesPerRow * tileSize, tileSize, 3),
      new THREE.MeshLambertMaterial({ color: 0xbaf455 })
    );
    foundation.position.z = 1.5;
    foundation.receiveShadow = true;

    grass.add(foundation);

    return grass;
  };

  const createMetaData = () => {
    const metadata: Row[] = [
      {
        type: "car",
        direction: false,
        speed: 188,
        vehicles: [
          { initialTileIndex: -4, color: 0xbdb638 },
          { initialTileIndex: -1, color: 0x78b14b },
          { initialTileIndex: 4, color: 0xa52523 },
        ],
      },
      {
        type: "forest",
        trees: [
          { tileIndex: -5, height: 50 },
          { tileIndex: 0, height: 30 },
          { tileIndex: 3, height: 50 },
        ],
      },
      {
        type: "truck",
        direction: true,
        speed: 125,
        vehicles: [
          { initialTileIndex: -4, color: 0x78b14b },
          { initialTileIndex: 0, color: 0xbdb638 },
        ],
      },
      {
        type: "forest",
        trees: [
          { tileIndex: -8, height: 30 },
          { tileIndex: -3, height: 50 },
          { tileIndex: 2, height: 30 },
        ],
      },
    ];
    return metadata;
  };

  const createTree = (tileIndex: number, height: number) => {
    const tree = new THREE.Group();
    tree.position.x = tileIndex * tileSize;

    const trunk = new THREE.Mesh(
      new THREE.BoxGeometry(15, 15, 20),
      new THREE.MeshLambertMaterial({
        color: 0x4d2926,
        flatShading: true,
      })
    );
    trunk.position.z = 10;
    tree.add(trunk);

    const crown = new THREE.Mesh(
      new THREE.BoxGeometry(30, 30, height),
      new THREE.MeshLambertMaterial({
        color: 0x7aa21d,
        flatShading: true,
      })
    );
    crown.position.z = height / 2 + 20;
    crown.castShadow = true;
    crown.receiveShadow = true;
    tree.add(crown);

    return tree;
  };

  const createRoad = (rowIndex: number) => {
    const road = new THREE.Group();
    road.position.y = rowIndex * tileSize;

    const foundation = new THREE.Mesh(
      new THREE.PlaneGeometry(tilesPerRow * tileSize, tileSize),
      new THREE.MeshLambertMaterial({ color: 0x454a59 })
    );
    foundation.receiveShadow = true;
    road.add(foundation);

    return road;
  };

  const createWheel = (x: number) => {
    const wheel = new THREE.Mesh(
      new THREE.BoxGeometry(12, 33, 12),
      new THREE.MeshLambertMaterial({
        color: 0x333333,
        flatShading: true,
      })
    );
    wheel.position.x = x;
    wheel.position.z = 6;
    return wheel;
  };

  const createCar = (
    initialTileIndex: number,
    direction: boolean,
    color: THREE.ColorRepresentation
  ) => {
    const car = new THREE.Group();
    car.position.x = initialTileIndex * tileSize;
    if (!direction) car.rotation.z = Math.PI;

    const main = new THREE.Mesh(
      new THREE.BoxGeometry(60, 30, 15),
      new THREE.MeshLambertMaterial({ color, flatShading: true })
    );
    main.position.z = 12;
    main.castShadow = true;
    main.receiveShadow = true;
    car.add(main);

    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(33, 24, 12),
      new THREE.MeshLambertMaterial({
        color: "white",
        flatShading: true,
      })
    );
    cabin.position.x = -6;
    cabin.position.z = 25.5;
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    car.add(cabin);

    const frontWheel = createWheel(18);
    car.add(frontWheel);

    const backWheel = createWheel(-18);
    car.add(backWheel);

    return car;
  };

  const createTruck = (
    initialTileIndex: number,
    direction: boolean,
    color: THREE.ColorRepresentation
  ) => {
    const truck = new THREE.Group();
    truck.position.x = initialTileIndex * tileSize;
    if (!direction) truck.rotation.z = Math.PI;

    const cargo = new THREE.Mesh(
      new THREE.BoxGeometry(70, 35, 35),
      new THREE.MeshLambertMaterial({
        color: 0xb4c6fc,
        flatShading: true,
      })
    );
    cargo.position.x = -15;
    cargo.position.z = 25;
    cargo.castShadow = true;
    cargo.receiveShadow = true;
    truck.add(cargo);

    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(30, 30, 30),
      new THREE.MeshLambertMaterial({ color, flatShading: true })
    );
    cabin.position.x = 35;
    cabin.position.z = 20;
    cabin.castShadow = true;
    cabin.receiveShadow = true;
    truck.add(cabin);

    const frontWheel = createWheel(37);
    truck.add(frontWheel);

    const middleWheel = createWheel(5);
    truck.add(middleWheel);

    const backWheel = createWheel(-35);
    truck.add(backWheel);

    return truck;
  };

  const createDirectionalLight = () => {
    const dirLight = new THREE.DirectionalLight();
    dirLight.position.set(-100, -100, 200);
    dirLight.up.set(0, 0, 1);
    dirLight.castShadow = true;

    dirLight.shadow.mapSize.width = 2048;
    dirLight.shadow.mapSize.height = 2048;

    dirLight.shadow.camera.up.set(0, 0, 1);
    dirLight.shadow.camera.left = -400;
    dirLight.shadow.camera.right = 400;
    dirLight.shadow.camera.top = 400;
    dirLight.shadow.camera.bottom = -400;
    dirLight.shadow.camera.near = 50;
    dirLight.shadow.camera.far = 400;

    return dirLight;
  };

  return {
    createRenderer,
    createCamera,
    createPlayer,
    createGrass,
    createTree,
    createMetaData,
    createRoad,
    createCar,
    createTruck,
    createDirectionalLight,
  };
};
