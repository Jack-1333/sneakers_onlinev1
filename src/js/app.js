
const contentNav = document.querySelector('#content-nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

abrir.addEventListener("click", () => {
    console.log('hola')
    contentNav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    contentNav.classList.remove("visible");
});
