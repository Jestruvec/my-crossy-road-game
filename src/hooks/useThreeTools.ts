import { useCallback, useRef } from "react";
import * as THREE from "three";

export const useThreeTools = () => {
  const scene = useRef(new THREE.Scene());
  const renderer = useRef<THREE.WebGLRenderer | null>(null);
  const camera = useRef<THREE.OrthographicCamera | null>(null);
  const player = useRef<THREE.Mesh | null>(null);

  const createRenderer = useCallback((canvas: HTMLCanvasElement) => {
    const newRenderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      canvas: canvas,
    });

    const { clientWidth, clientHeight } = canvas;

    newRenderer.setPixelRatio(clientWidth / clientHeight);
    newRenderer.setSize(clientWidth, clientHeight);

    renderer.current = newRenderer;
  }, []);

  const createCamera = useCallback(
    (clientWidth: number, clientHeight: number) => {
      const size = 300;
      const viewRatio = clientWidth / clientHeight;
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

      camera.current = newCamera;
    },
    []
  );

  const createPlayer = useCallback(() => {
    const body = new THREE.Mesh(
      new THREE.BoxGeometry(15, 15, 20),
      new THREE.MeshLambertMaterial({
        color: "white",
        flatShading: true,
      })
    );

    scene.current.add(body);
    player.current = body;
  }, []);

  const setLights = useCallback(() => {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Luz ambiental suave
    const dirLight = new THREE.DirectionalLight(0xffffff, 1); // Luz direccional fuerte

    dirLight.position.set(100, -100, 200); // Posición de la luz
    dirLight.castShadow = true;

    scene.current.add(ambientLight);
    scene.current.add(dirLight);
  }, []);

  return {
    createRenderer,
    createCamera,
    createPlayer,
    setLights,
    player: player.current,
    camera: camera.current,
    renderer: renderer.current,
  };
};
