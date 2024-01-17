const pintarProducto = document.querySelector('#pintarproducto');
const unidadesProducto = document.querySelector('#unidades');
const precioProducto = document.querySelector('#precio');
const carritoVacio = document.querySelector('#carritovacio');
const totales = document.querySelector('#totales');
const vaciarCarrito = document.querySelector('#vaciarcarrito');
// const contenidoMujer = document.querySelector('#contenidomujer')
// const contenidoNino = document.querySelector('#contenidonino')
// const contenidoOferta = document.querySelector('#contenidooferta')

function getProductos() {
    pintarProducto.innerHTML = "";
    const productos = JSON.parse(localStorage.getItem("snikers"));
    console.log(productos)

    if(productos && productos.length > 0) {
        productos.forEach(( producto ) => {
            const contentProductHh = document.createElement("div");
            contentProductHh.classList.add('container', 'col-12', 'col-md-10', 'my-3', 'py-3');
            contentProductHh.innerHTML = `
                    <div class="row">
                        <div class="col-3 card-body">
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        </div>
                        <div class="col-3 d-flex flex-column justify-content-center align-items-center">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.genero}</p>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center">
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                        <div class="col-3 d-flex justify-content-center align-items-center gap-3">
                            <button class="edit-boton-carrito btn btn-primary fs-4 fw-bold">-</button>
                            <span>${producto.cantidad}</span>
                            <button class="edit-boton-carrito btn btn-primary fs-4 fw-bold">+</button>
                        </div>
                    </div>
                `;
    
            pintarProducto.appendChild(contentProductHh);
    
            contentProductHh.getElementsByTagName("button")[0].addEventListener("click", (e) => {
                restarCarrito(producto);
                getProductos();
                updateTotales();
                
            });
            contentProductHh.getElementsByTagName("button")[1].addEventListener("click", (e) => {
                const contarElemento = e.target.parentElement.getElementsByTagName("span")[0];
                contarElemento.innerText = addCarrito(producto);
                updateTotales();
            });
        });
    }

};

getProductos();
updateTotales();

function updateTotales () {
    const productos = JSON.parse(localStorage.getItem("snikers"));
    let unidades = 0;
    let precio = 0;
    if(productos && productos.length > 0) {
        productos.forEach(producto => {
            unidades += producto.cantidad;
            precio += producto.precio * producto.cantidad;
        });
        unidadesProducto.innerText = unidades;
        precioProducto.innerText = precio;
    }
    mensajeVacio();
}

function mensajeVacio() {
    const productos = JSON.parse(localStorage.getItem("snikers"));
    carritoVacio.classList.toggle("esconder-carrito", productos && productos.length > 0);
    totales.classList.toggle("esconder-carrito", !(productos && productos.length > 0));

}
mensajeVacio();

vaciarCarrito.addEventListener("click", reiniciarCarrito)

function reiniciarCarrito() {
    localStorage.removeItem("snikers");
    updateTotales();
    getProductos();
}