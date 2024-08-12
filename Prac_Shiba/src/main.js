import * as THREE from "three";
import { GLTFLoader } from "GLTFLoader";

let scene = new THREE.Scene();
let renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#canvas"),
  // 계단 현상 방지
  antialias: true,
});
renderer.outputEncoding = THREE.sRGBEncoding;
// 색상 보정

let camera = new THREE.PerspectiveCamera(30, 1);
camera.position.set(0, 0, 5);
// 카메라 위치 조정

scene.background = new THREE.Color("white");
let light = new THREE.DirectionalLight(0xffff00, 10);
scene.add(light);
// 카메라 조명?

let loader = new GLTFLoader();
loader.load("shiba/scene.gltf", (Shiba) => {
  scene.add(Shiba.scene);

  // 애니메이션
  function animate() {
    requestAnimationFrame(animate);
    // 아래 코드는 1초에 60번 정도 실행됨 (약 1Frame)
    Shiba.scene.rotation.y += 0.01;
    renderer.render(scene, camera);
  }
  animate();

  // 마우스로 컨트롤 하는 방법 ?
  // THREE 내에 OrbitControl 사용하면 됨
});
