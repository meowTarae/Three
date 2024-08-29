import { Box, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyElement3D() {
  const refMesh = useRef();
  const refWireMesh = useRef();

  useEffect(() => {
    refWireMesh.current.geometry = refMesh.current.geometry;
  }, []);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      {/* 
        <mesh>
          <boxGeometry />
          <meshStandardMaterial color={"yellow"} />
        </mesh>

        <mesh>
          <boxGeometry />
          <meshStandardMaterial emissive={"red"} wireframe={true} />
        </mesh>

        위 코드는 하나의 boxGeometry에 작업을 함에도
        <boxGeometry />를 두 번 호출하고 있다.
        이를 useRef를 사용하여 아래와 같이 나타낼 수 있다.
      */}

      <mesh ref={refMesh}>
        <boxGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <mesh ref={refWireMesh}>
        <meshStandardMaterial emissive={"red"} wireframe={true} />
      </mesh>
    </>
  );
}
