let searchBtn = document.querySelector('#search-btn')
let searchBar = document.querySelector('.search-bar-container')
let formBtn = document.querySelector('#login-btn')
let loginForm = document.querySelector('.login-form-container')
let formClose = document.querySelector('#form-close')
let menu = document.querySelector('#menu-bar')
let navbar = document.querySelector('.navbar')
let vidBtn = document.querySelectorAll('.vid-btn')


window.onscroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active')
    loginForm.classList.remove('active')
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

searchBtn.addEventListener('click',() =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active')
});

formBtn.addEventListener('click',() =>{
    loginForm.classList.add('active')
});

formClose.addEventListener('click',() =>{
    loginForm.classList.remove('active')
});

menu.addEventListener('click',() =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
});

vidBtn.forEach(btn =>{
    btn.addEventListener('click',() =>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active')
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    })
})

var swiper = new Swiper(".members-slider", {
    loop:true,
    slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        },

    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });