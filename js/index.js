const ham = document.querySelector('.ham');
const link = document.querySelector('.nav-link');
const barras = document.querySelectorAll('.ham span');


ham.addEventListener('click', () => {
    link.classList.toggle('activado');
    barras.forEach(child => {child.classList.toggle('animado')});
});
