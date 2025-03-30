import { useEffect, useRef } from "react";
import { useThreeTools } from "./hooks/useThreeTools";

const App = () => {
  const sceneRef = useRef<HTMLCanvasElement | null>(null);
  const { createRenderer, createCamera, createPlayer, setLights, renderer } =
    useThreeTools();

  useEffect(() => {
    if (!sceneRef.current) return;

    const canvas = sceneRef.current;
    const { clientWidth, clientHeight } = canvas;

    createRenderer(canvas);
    createCamera(clientWidth, clientHeight);
    createPlayer();
    setLights();

    return () => {
      if (renderer) {
        renderer.dispose(); // Limpieza del renderer
      }
    };
  }, [createRenderer, createCamera, createPlayer, setLights, renderer]);

  return <canvas ref={sceneRef} />;
};

export default App;
