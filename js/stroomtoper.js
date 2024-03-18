import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { LoadingManager } from 'three';

const loadingManager = new LoadingManager();

loadingManager.onStart = function (url, itemsLoaded, itemsTotal) {
  console.log('Memulai memuat: ' + url + '. ' + itemsLoaded + ' dari ' + itemsTotal + ' item sudah dimuat.');
};

loadingManager.onProgress = function (url, itemsLoaded, itemsTotal) {
  console.log('Mengunggah: ' + url + '. ' + itemsLoaded + ' dari ' + itemsTotal + ' item sudah dimuat.');
};

loadingManager.onLoad = function () {
  console.log('Semua item sudah dimuat.');
  // Lakukan sesuatu setelah semua item berhasil dimuat
};

loadingManager.onError = function (url) {
  console.log('Gagal memuat: ' + url);
};

// Three.js
export function Slide1(swiper, url, loadingManager){


var root;

let canvas1 = document.getElementById('canvas1');
let container = document.getElementsByClassName('product-img__item')[3];

// Membuat scene, camera, dan pencahayaan
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  window.innerWidth / window.innerHeight,
  0.1,
  500
);
camera.position.z = 3;


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
const helmetLoader = new GLTFLoader(loadingManager);
helmetLoader.load(url, function (glb) {


  console.log('stroomtoper', glb);
  root = glb.scene;
  root.position.set(0, -0.50, 0);
  root.scale.set(2.2, 2.2, 2.2);

  scene.add(root);
  window.addEventListener('resize', resize);
}, function ( progress ) {

  console.log ( ( progress.loaded / progress.total * 100 ) + '%' );

}, function ( error ) {

  console.log ( error );
}
);
// Membuat renderer
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas: canvas1 });
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
    renderer.setSize(window.innerWidth, window.innerHeight);
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.render(scene, camera);


  requestAnimationFrame(animate);
};

animate();

}


