import { Canvas } from "@react-three/fiber";
import ThreeElement from "./components/ThreeElement";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";

function App() {
  const color = useControls({
    value: "green",
  });

  const grid = useControls({
    segments: { value: 10, min: 2, max: 100, step: 1 },
  });

  return (
    <>
      <Canvas>
        <color attach={"background"} args={[color.value]} />
        <OrbitControls />
        <axesHelper scale={[5, 5, 5]} />
        <gridHelper args={[10, grid.segments]} />

        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
