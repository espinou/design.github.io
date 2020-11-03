$(document).ready(() => {
  // Button for email form
  $('.sub-btn').on('mouseenter', () => {
      $('.sub-btn').css({
        color: '#EDDED1',
        backgroundColor: 'rgba(46, 59, 79, 1)' 
      });
  }); 
  
  $('.sub-btn').on('mouseleave', () => {
    $('.sub-btn').css({
      color: 'rgba(46, 59, 79, 1)',
      backgroundColor: 'transparent' 
    });
}); 

$('.sub-btn').on('mouseclick', () => {
  $('.sub-btn').css({
    color: '#EDDED1',
    backgroundColor: 'rgba(46, 59, 79, 1)' 
  });
}); 

//Button for thank you page
$('.return').on('mouseenter', () => {
  $('.return').css({
    color: '#EDDED1',
    backgroundColor: 'rgba(46, 59, 79, 1)' 
  });
}); 

$('.return').on('mouseleave', () => {
$('.return').css({
  color: 'rgba(46, 59, 79, 1)',
  backgroundColor: 'transparent' 
});
}); 

// Hover over Projects
$('.box-a').on('mouseenter', () => {
  $('.box-a').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-a').on('mouseleave', () => {
$('.box-a').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-b').on('mouseenter', () => {
  $('.box-b').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-b').on('mouseleave', () => {
$('.box-b').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-c').on('mouseenter', () => {
  $('.box-c').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-c').on('mouseleave', () => {
$('.box-c').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-d').on('mouseenter', () => {
  $('.box-d').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-d').on('mouseleave', () => {
$('.box-d').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-e').on('mouseenter', () => {
  $('.box-e').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-e').on('mouseleave', () => {
$('.box-e').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-f').on('mouseenter', () => {
  $('.box-f').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-f').on('mouseleave', () => {
$('.box-f').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-g').on('mouseenter', () => {
  $('.box-g').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-g').on('mouseleave', () => {
$('.box-g').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-h').on('mouseenter', () => {
  $('.box-h').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-h').on('mouseleave', () => {
$('.box-h').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-i').on('mouseenter', () => {
  $('.box-i').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-i').on('mouseleave', () => {
$('.box-i').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 

$('.box-j').on('mouseenter', () => {
  $('.box-j').css({
    color: '#fff',
    textDecoration: 'none',
    backgroundBlendMode: 'multiply',
  });
}); 

$('.box-j').on('mouseleave', () => {
$('.box-j').css({
  color: 'transparent',
  backgroundBlendMode: 'normal' 
  });
}); 
});

//Nav
const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav__item');
const emailBtn = document.querySelector('.btn');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if(!showMenu) {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    navItems.forEach(item => item.classList.add('open'));

    showMenu = true;
  } else {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    navItems.forEach(item => item.classList.remove('open'));

    showMenu = false;
  }
}

//Snap scroll

