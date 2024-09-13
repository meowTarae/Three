import { Canvas } from "@react-three/fiber";
import ThreeElement from "./components/ThreeElement";
import "./App.css";

function App() {
  return (
    <>
      <Canvas>
        <ThreeElement />
      </Canvas>
    </>
  );
}

export default App;
