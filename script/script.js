const btnMobile = document.getElementById('botao-mobile');

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function toggleMenu(event){
    if (event.type === 'touchstart') event.preventDefaut();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}