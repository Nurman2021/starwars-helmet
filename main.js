
import { Slide1 } from './js/stroomtoper';
import { Slide2 } from './js/mandalorian'
import { Slide3 } from './js/darth_vader';
import './style.css'



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
  console.log(target);
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



// Slide1(swiper);
// Slide2(swiper);
// Slide3(swiper);