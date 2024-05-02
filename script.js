const navbar = document.querySelector('.navbar');
const mobilenavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.bars');


button.addEventListener('click',function(){
    mobilenavbar.classList.toggle('active');
});