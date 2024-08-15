import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function MyElement3D() {
  const pos = [1, 1, 1];
  const angle = [0, 45 * (Math.PI / 180), 0];
  /* 
    x축으로 0도, y축으로 45도, z축으로 0도 회전 
    R3F는 각도를 라디안 단위로 지정해야하기 때문
  */

  const refMesh = useRef();
  useFrame((state, delta) => {
    refMesh.current.rotation.x += delta;
  });

  return (
    <>
      {/* 조명 역할, pos는 조명의 위치 */}
      <directionalLight position={pos} />

      {/* 세로가 y, 수평이 x */}
      <mesh ref={refMesh} rotation={angle}>
        <boxGeometry />
        <meshStandardMaterial color="blue" />
      </mesh>
    </>
  );
}
