import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// Three.js
export function Slide2(swiper){

let slide1 = document.createElement('div');
slide1.className = 'swiper-slide';

var root;


let rendererElement = document.createElement('div');
rendererElement.id = 'renderer';
slide1.appendChild(rendererElement);

// Membuat scene, camera, dan pencahayaan
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.z = 2;


const light1 = new THREE.DirectionalLight(0xffffff, 2);
light1.position.set(2, 2, 5);
light1.castShadow = true;
scene.add(light1);

const ambientlight = new THREE.AmbientLight(0xffffff, 6);
scene.add(ambientlight);

const pointlight = new THREE.PointLight(0xffffff, 1);
pointlight.position.set(5, 5, 5);
scene.add(pointlight);

// Memuat model helm
const helmetLoader = new GLTFLoader();
helmetLoader.load('./3d_model/mandalorian_helmet/scene.gltf', function (glb) {

  console.log('mandalorian', glb);
  root = glb.scene;
  root.position.set(0, 0, 0);
  root.scale.set(0.5,0.5,0.5);



  scene.add(root);
});

// Membuat renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
renderer.setClearColor(0x000000, 0);
rendererElement.appendChild(renderer.domElement);



// Fungsi animate untuk melakukan render dan animasi
const animate = () => {
  renderer.render(scene, camera);
    if (root) {
      root.rotation.y += 0.01; // Mengubah sudut rotasi sesuai kebutuhan Anda
    }


  requestAnimationFrame(animate);
};

animate();
swiper.appendSlide(slide1);

}


// Swiper JS

