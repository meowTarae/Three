import { Canvas, useThree } from "@react-three/fiber";
import ThreeElement from "./components/ThreeElement";
import "./App.css";
import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { useEffect } from "react";
import * as THREE from "three";

/*
  안개 (Fog)
  const { scene } = useThree();
  scene.fog = new THREE.Fog("gray", 12, 15);
  
  Fog(color, near, far)
    near : 거리보다 가까이 있는 물체는 선명하게 보입니다.
    near와 far 거리 사이에 있는 물체는 점점 안개에 의해 흐릿해지기 시작합니다.
    far 거리보다 멀리 있는 물체는 완전히 안개에 가려져 보이지 않습니다.
*/

const FogComponent = () => {
  const { scene } = useThree();

  useEffect(() => {
    scene.fog = new THREE.Fog("gray", 12, 15);

    return () => {
      scene.fog = null;
    };
  }, [scene]);

  return null;
};

function App() {
  const color = useControls({
    value: "black",
  });

  const grid = useControls({
    segments: { value: 10, min: 2, max: 100, step: 1 },
  });

  return (
    <>
      <Canvas
        camera={{ position: [10, 10, 10] }}
        gl={{ pixelRatio: window.devicePixelRatio > 1 ? 2 : 1, alpha: true }}
      >
        <FogComponent />
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
