
import { Slide1 } from './js/stroomtoper';
import { Slide2 } from './js/mandalorian';
import { Slide3 } from './js/darth_vader';
import './style.css';
import { LoadingManager } from 'three';

const loadingManager = new LoadingManager;

let loadingPercent = document.getElementById('loading-percent');
let loadingScreen = document.getElementById('loading-container');
let progressElement = document.querySelector('.loading-progress');
let audio = document.getElementById('myAudio');

function playAudio(){
  audio.play();
}

loadingManager.onStart = function (url, itemsLoaded, itemsTotal){
  loadingScreen.style.display = 'flex';
};

loadingManager.onProgress = function (url, itemsLoaded, itemsTotal){
  const progress = Math.round((itemsLoaded / itemsTotal) * 100);
  progressElement.style.width = progress+'%';
  loadingPercent.innerText = `${progress}%`;

};

loadingManager.onLoad = function (){
  loadingScreen.style.display = 'none';
  window.onload = playAudio;
};

const stormtrooper = 'assets/3d_model/empire_stormtrooper_helmet/scene.gltf';
const darth_vader = 'assets/3d_model/darth_vader_helmet/scene.gltf';
const mandalorian = 'assets/3d_model/mandalorian_helmet/scene.gltf';

loadingManager.onError = function (url){
  console.log('gagal memuat', url);
};
// SWIPER JS
var swiper = new Swiper('.product-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: false,
  navigation: {
    nextEl: '.next',
    prevEl: '.prev'
  },
  on: {
    init: function() {
      var index = this.activeIndex;
      var target = document.querySelectorAll('.product-slider__item')[index].getAttribute('data-target');
      console.log(target);
      document.querySelectorAll('.product-img__item').forEach(function(item) {
        item.classList.remove('active');
      });
      document.querySelector('.product-img__item#' + target).classList.add('active');
    }
  }
});

swiper.on('slideChange', function() {
  var index = this.activeIndex;
  var target = document.querySelectorAll('.product-slider__item')[index].getAttribute('data-target');
  var target2 = document.querySelectorAll('.product-slider__item')[index].getAttribute('data-legion');
  var wrapper = document.querySelector('.wrapper');
  if(target2 == 'galactic'){
    wrapper.style.backgroundImage = "url('https://ik.imagekit.io/nurman/bg2.png?updatedAt=1701779690390')";
  }else if(target2 == 'mandalorian'){
    wrapper.style.backgroundImage = "url('https://ik.imagekit.io/nurman/bgB2.png?updatedAt=1701779691285')";
  }
  console.log(target);
  console.log(target2);
  document.querySelectorAll('.product-img__item').forEach(function(item) {
    item.classList.remove('active');
  });
  document.querySelector('.product-img__item#' + target).classList.add('active');
  if (swiper.isEnd) {
    document.querySelector('.prev').classList.remove('disabled');
    document.querySelector('.next').classList.add('disabled');
  } else {
    document.querySelector('.next').classList.remove('disabled');
  }
  if (swiper.isBeginning) {
    document.querySelector('.prev').classList.add('disabled');
  } else {
    document.querySelector('.prev').classList.remove('disabled');
  }
});

document.querySelectorAll(".js-fav").forEach(function(item) {
  item.addEventListener("click", function() {
    this.querySelector('.heart').classList.toggle("is-active");
  });
});







// loading
Slide1(swiper, stormtrooper, loadingManager);
Slide2(swiper, mandalorian, loadingManager);
Slide3(swiper, darth_vader, loadingManager);

