import {productosHombres} from "./productsList.js";

let carrito = [];

export function mostrarHombre () {
    const contenidoHombre = document.querySelector('#contenidohombre');

    productosHombres.forEach(( producto ) => {
        const contentProductHombre = document.createElement('div');
        contentProductHombre.classList.add('col-12', 'col-md-4', 'card', 'my-3', 'py-3');
        contentProductHombre.innerHTML = `
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.genero}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                </div>
        `;
        
        contenidoHombre.append(contentProductHombre);

    
        // const comprar = document.createElement("button");
        // comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        // comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        // contentProductHombre.append(comprar);
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