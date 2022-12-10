import * as THREE from 'three'
import { CubeCamera } from 'three'
import { WEBGL } from './webgl'

if (WEBGL.isWebGLAvailable()) {
  // 장면
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x004fff)

  // 카메라
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.z = 2

  // 렌더러
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
  })
  renderer.setSize(window.innerWidth, window.innerHeight)

  document.body.appendChild(renderer.domElement)

  // Mesh
  const geometry01 = new THREE.BoxGeometry(0.5, 0.5, 0.5)
  const material01 = new THREE.MeshStandardMaterial({
    color: 0x999999,
  })
  const obj01 = new THREE.Mesh(geometry01, material01)
  obj01.position.x = 1
  scene.add(obj01)

  function render(time) {
    time *= 0.0005

    obj01.rotation.x = time
    obj01.rotation.y = time

    renderer.render(scene, camera)
    requestAnimationFrame(render)
  }
  requestAnimationFrame(render)

  // 반응형 처리
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }
  window.addEventListener('resize', onWindowResize)
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}
