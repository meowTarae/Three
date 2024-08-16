import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MyElement3D() {
  const lightPos = [1, 1, 1];
  const angle = [45 * (Math.PI / 180), 0, 0];
  /* 
    x축으로 0도, y축으로 45도, z축으로 0도 회전 
    R3F는 각도를 라디안 단위로 지정해야하기 때문
  */

  const refMesh = useRef();
  // useFrame((state, delta) => {
  //   refMesh.current.rotation.x += delta;
  //   refMesh.current.rotation.y += delta;
  // });

  return (
    <>
      <axesHelper scale={10} />
      <OrbitControls />

      {/* 조명 역할, pos는 조명의 위치 */}
      <directionalLight position={lightPos} />

      {/* 세로가 y, 수평이 x */}
      <mesh
        ref={refMesh}
        rotation={angle}
        position={[2, 2, 0]}
        scale={[2, 1, 1]}
      >
        <axesHelper />
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
