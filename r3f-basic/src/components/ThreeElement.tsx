import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeElement() {
  const boxRef = useRef<THREE.Mesh>(null);
  const boxCopyRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (boxRef.current && boxCopyRef.current) {
      // 360도는 2파이
      // 1파이는 3.141
      // 대충 6.28이 360도
      boxRef.current.rotation.x += THREE.MathUtils.degToRad(1);
      boxCopyRef.current.rotation.x += THREE.MathUtils.degToRad(1);

      // boxRef.current.rotation.y += 0.01;
      // boxRef.current.rotation.z += 0.01;
    }
  });

  useEffect(() => {
    if (boxCopyRef.current && boxRef.current)
      boxCopyRef.current.geometry = boxRef.current.geometry;
  }, []);

  return (
    <>
      <directionalLight position={[0.2, 0.2, 0.2]} />

      <mesh ref={boxRef} rotation={[THREE.MathUtils.degToRad(10), 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"black"} wireframe />
      </mesh>

      <mesh ref={boxCopyRef}>
        <meshStandardMaterial />
      </mesh>
    </>
  );
}
