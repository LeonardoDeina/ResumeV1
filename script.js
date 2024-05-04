{
const navbar = document.querySelector('.navbar');
const mobilenavbar = document.querySelector('.navbar-mobile');
const button = document.querySelector('.bars');


button.addEventListener('click',function(){
    mobilenavbar.classList.toggle('active');
});
}

function changeProject (){
    let projetoAtual = 0;
    const projects = document.querySelectorAll('.Projects .Project');
    const totalProjects = projects.length;

    function showProject(index) {
        projects.forEach((projects, i) => {
            if (i===index){
                projects.style.display = 'flex';
            }else{
                projects.style.display = 'none';
            }
        });
    }

    function nextProject() {
        projetoAtual = (projetoAtual+1) % totalProjects;
        showProject(projetoAtual);
    }

    showProject(projetoAtual);

    setInterval(nextProject, 3500)
}

document.addEventListener('DOMContentLoaded', changeProject);