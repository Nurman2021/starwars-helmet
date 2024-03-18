import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { LoadingManager } from 'three';
// Three.js
export function Slide3(swiper, url, loadingManager){

var root;
let canvas3 = document.getElementById('canvas3');

// Membuat scene, camera, dan pencahayaan
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.z = 2;

const light1 = new THREE.DirectionalLight(0xffffff, 5);
light1.position.set(2, 2, 5);
light1.castShadow = true;
scene.add(light1);

const ambientlight = new THREE.AmbientLight(0xffffff, 10);
scene.add(ambientlight);

const pointlight = new THREE.PointLight(0xffffff, 1);
pointlight.position.set(5, 5, 5);
scene.add(pointlight);

// Memuat model helm
const helmetLoader = new GLTFLoader(loadingManager);
helmetLoader.load(url, function (glb) {

  console.log('darth-vader ', glb);
  root = glb.scene;
  root.position.set(0, -0.2, 0);
  root.scale.set(0.15,0.15,0.15);

  scene.add(root);
  window.addEventListener('resize', resize);
  
}, function ( progress ) {

  console.log ( ( progress.loaded / progress.total * 100 ) + '%' );

}, function ( error ) {

  console.log ( error );
});


// Membuat renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas3 });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
renderer.setClearColor(0x000000, 0);

function resize() {

  const width = window.innerWidth;
  const height = window.innerHeight;

  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  renderer.setSize( width, height );

}

// Fungsi animate untuk melakukan render dan animasi
const animate = () => {
  renderer.render(scene, camera);
    if (root) {
      root.rotation.y += 0.01; // Mengubah sudut rotasi sesuai kebutuhan Anda
    }


  requestAnimationFrame(animate);
};

animate();

}


// Swiper JS

