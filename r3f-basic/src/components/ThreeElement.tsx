import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function ThreeElement() {
  const { size, gl, scene, camera } = useThree();
  const boxRef = useRef(null);

  useFrame((state, delta) => {
    // console.log(state);
    boxRef.current.rotation.x += 0.0024;
    boxRef.current.rotation.y += 0.0024;
    boxRef.current.rotation.z += 0.0024;
  });

  return (
    <>
      <directionalLight position={[5, 5, 5]} />

      <mesh
        ref={boxRef}
        rotation={[
          THREE.MathUtils.degToRad(45),
          THREE.MathUtils.degToRad(45),
          0,
        ]}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </>
  );
}
