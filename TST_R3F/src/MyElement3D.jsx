import { Box, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const MyBox = (props) => {
  const geom = new THREE.BoxGeometry();
  return <mesh {...props} geometry={geom}></mesh>;
};

export default function MyElement3D() {
  return (
    <>
      <OrbitControls />

      <ambientLight intensity={0.1} />
      <directionalLight position={[2, 1, 3]} intensity={0.5} />

      <mesh>
        <boxGeometry />
        <meshStandardMaterial color={"yellow"} />
      </mesh>

      <Box position={[1.2, 0, 0]}>
        <meshStandardMaterial color={"purple"} />
      </Box>

      <MyBox position={[-1.2, 0, 0]}>
        <meshStandardMaterial color={"red"} />
      </MyBox>
    </>
  );
}
