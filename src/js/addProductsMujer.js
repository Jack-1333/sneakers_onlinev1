import {productosMujeres} from "./productsList.js";

let carrito = [];

export function mostrarMujer () {
    const contenidoMujer = document.querySelector('#contenidomujer');

    productosMujeres.forEach(( producto2 ) => {
        const contentProductMujer = document.createElement('div');
        contentProductMujer.classList.add('col-12', 'col-md-4', 'card', 'my-3', 'py-3');
        contentProductMujer.innerHTML = `
            <div>
                <img class="card-img-top" src="${producto2.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto2.modelo}</h3>
                    <p class="card-text">${producto2.genero}</p>
                    <p class="card-text">S/. ${producto2.precio}</p>
                </div>
            </div>
        `;

        contenidoMujer.append(contentProductMujer);
    
        // const comprar = document.createElement("button");
        // comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        // comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        // contentProductMujer.append(comprar);
        // // console.log(comprar)
        // // const comprar = document.querySelector('button');
        // comprar.addEventListener("click", () => {
        //     const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);
    
        //     if (repeat) {
        //         carrito.map((prod) => {
        //             if (prod.id === producto.id) {
        //                 prod.cantidad++;
        //             }
        //         })
        //     }
        //     else {
        //         carrito.push({
        //             id: producto.id,
        //             imagen: producto.imagen,
        //             modelo: producto.modelo,
        //             precio: producto.precio,
        //             cantidad: producto.cantidad
        //         });
        //     };
        //     console.log(carrito)
        //     carritoCounter();
        // });
    });
};



