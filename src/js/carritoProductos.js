const pintarProducto = document.querySelector('#pintarproducto');
// const contenidoMujer = document.querySelector('#contenidomujer')
// const contenidoNino = document.querySelector('#contenidonino')
// const contenidoOferta = document.querySelector('#contenidooferta')

function getProductos() {

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
                            <button class="btn btn-primary fs-4 fw-bold">-</button>
                            <span>0</span>
                            <button class="btn btn-primary fs-4 fw-bold">+</button>
                        </div>
                    </div>
                `;
    
            pintarProducto.appendChild(contentProductHh);
    
            contentProductHh.getElementsByTagName("button")[0].addEventListener("click", () => restarCarrito(producto));
            contentProductHh.getElementsByTagName("button")[1].addEventListener("click", () => addCarrito(producto));
        });
    }

};

getProductos();