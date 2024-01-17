// import {mostrarHombre} from './addProductsHombre.js'
// import {mostrarMujer} from './addProductsMujer.js'

document.addEventListener('DOMContentLoaded', () => { 
    initApp();
});

function initApp() {
    // fixedNavigation();
    hambugerMenu();
    mostrarFiltro();
    // mostrarHombre();
    // mostrarMujer();

}




// function fixedNavigation () {
//     const bar = document.querySelector('.header');
//     const categoria = document.querySelector('.multimedia');
//     const body = document.querySelector('body');
//     window.addEventListener('scroll', () => {
//     if ( categoria.getBoundingClientRect().top < 0 ) {
//         // console.log('ya paso')
//         bar.classList.add('fixed');
//         body.classList.add('body-scroll');
//     } else {
//         // console.log('no paso')
//         bar.classList.remove('fixed');
//         body.classList.remove('body-scroll');
//     }
//     });
// }

function mostrarFiltro() {
    const contentAside = document.querySelector('#content-aside');
    const openFiltro = document.querySelector('#openfiltro');
    const closeFiltro = document.querySelector('#closefiltro');
    const zoom = document.querySelector('#zoom');
    // const displays = document.querySelector()

    openFiltro.addEventListener("click", () => {
        contentAside.classList.remove("content-aside");
        openFiltro.classList.toggle('open-filtro');
        closeFiltro.classList.toggle('close-filtro');
        zoom.classList.remove("col-12");
        zoom.classList.add("col-10");
        contentAside.classList.remove("col-2");
        contentAside.classList.add("col-12");
        contentAside.classList.add("col-md-2");
        contentAside.classList.remove("col-md-12");
        zoom.classList.add('d-none')
        zoom.classList.add('d-md-block')



    });

    closeFiltro.addEventListener("click", () => {
        contentAside.classList.add("content-aside");
        openFiltro.classList.toggle('open-filtro');
        closeFiltro.classList.toggle('close-filtro');
        zoom.classList.remove("col-10");
        zoom.classList.add("col-12");
        zoom.classList.remove('d-none')
        zoom.classList.add('d-block')
        contentAside.classList.add("col-2");
        contentAside.classList.remove("col-12");

        
    });
}


function hambugerMenu() {
    const body = document.querySelector('body');
    const contentNavb = document.querySelector('#content-navb');
    const openMenu = document.querySelector('#open');
    const closeMenu = document.querySelector('#close');
    openMenu.addEventListener("click", () => {
        contentNavb.classList.add("visible");
        body.classList.add('no-scroll');
        addElementMenu ();
    });

    closeMenu.addEventListener("click", () => {
        contentNavb.classList.remove("visible");
        body.classList.remove('no-scroll');
        removeElementMenu ();
    });
}

function addElementMenu () {
    const contentTitle = document.createElement('div');
    contentTitle.setAttribute('id', 'content-title')
    contentTitle.classList.add('col-12', 'd-flex', 'justify-content-center', 'align-items-center')
    contentTitle.innerHTML = `<a class="text-danger marca" href="/index.html">
    Sneakers <span class="text-warning">Online</span></a>`; 
    const contentRegisterCar = document.createElement('div');
    contentRegisterCar.setAttribute('id', 'content-regcar');
    contentRegisterCar.classList.add('col-12', 'd-flex', 'justify-content-end', 'align-items-center', 'gap-5')
    contentRegisterCar.innerHTML = `
    <a class="btn btn-dark text-uppercase fs-5" href="#" role="button">Iniciar sesión</a>
    <a class="btn btn-dark text-uppercase fs-5" href="/src/producto/1_carrito.html" role="button">Ir Al Carrito</a>`;
    const marca = document.getElementById('content-navb');
    marca.insertBefore(contentTitle, marca.children[1]);
    marca.insertBefore(contentRegisterCar, marca.children[4]);
};

function removeElementMenu () {
    const marca = document.getElementById('content-navb');
    const contentTitle = document.getElementById('content-title');
    const contentRegisterCar = document.getElementById('content-regcar');
    marca.removeChild(contentTitle);
    marca.removeChild(contentRegisterCar);
}