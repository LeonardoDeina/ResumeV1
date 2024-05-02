const navbar = document.querySelector('.navbar');
const mobilenavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.bars');
const apagafoto = function(){ this.style.display = 'none';}

document.getElementById('div-foto-inicio').onclick = apagafoto



button.addEventListener('click',function(){
    mobilenavbar.classList.toggle('active');
});