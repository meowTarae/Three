import { useControls } from "leva";
import { Box, OrbitControls } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MyElement3D() {
  const mesh1 = useRef();
  const mesh2 = useRef();

  useEffect(() => {
    mesh2.current.material = mesh1.current.material;
  }, []);

  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[0, 1, 0]} />
      <directionalLight position={[1, 2, 8]} intensity={0.7} />

      <mesh ref={mesh1} position={[1, 0, 0]}>
        <boxGeometry />
        <meshLambertMaterial color="#d25383" wireframe={false} />
      </mesh>

      <mesh ref={mesh2} position={[-1, 0, 0]}>
        <torusGeometry args={[0.5, 0.2]} />
      </mesh>

      {/* <axesHelper scale={10} /> */}
    </>
  );
}

/**
 * 0910 화 메모
  Material
  Mesh  Basic     Material
  Mesh  Standard  Material
  Mesh  Phong     Material
  Mesh  Lambert   Material
  Mesh  Physical  Material
  Mesh  Depth     Material
  Mesh  Normal    Material

  Drei에서 또 다른 Mesh 클래스들이 있음

  3차원 객체를 표현할 때 3가지로 나타낼 수 있음.
  Points, Line, Mesh
  각각 점, 선, 면
 */
