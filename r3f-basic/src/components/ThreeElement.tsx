import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

/*
  three의 Clock 클래스를 통해, 유저의 디바이스 성능에 관계없이 동일한 퍼포먼스를 보여지게끔
    1. ElapsedTime (경과 시간)
    2. delta (이전 프레임과의 간격)

  이런 변하는 상수값들에 의해 컴포넌트가 리렌더링 되지 않게끔, useRef에 해당 값을 집어넣어주자.
*/
export default function ThreeElement() {
  const boxRef = useRef<THREE.Mesh>(null);
  const boxCopyRef = useRef<THREE.Mesh>(null);
  const clock = useRef(new THREE.Clock());

  useFrame(() => {
    // const elapsedTime = clock.current.getElapsedTime();
    const delta = clock.current.getDelta();

    if (boxRef.current && boxCopyRef.current) {
      // boxRef.current.rotation.x = elapsedTime;
      // boxCopyRef.current.rotation.x = elapsedTime;
      boxRef.current.rotation.x += delta;
      boxCopyRef.current.rotation.x += delta;
    }

    console.log(delta);
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
