const productosMujeres = [
    {
        id: 1,
        marca: "Adidas",
        modelo: "Aire Force",
        genero: "Hombre",
        precio: 110,
        imagen: "../img/productos_adidas/mujer/1_ZAPATILLAS_EQ21_RUN.jpg",
        cantidad: 1
    },
    {
        id: 2,
        marca: "Adidas",
        modelo: "Aire Force2",
        genero: "Hombre",
        precio: 120,
        imagen: "../img/productos_adidas/mujer/2_Zapatillas_de_Trail_Running_Tracefinder_Plomo_GZ5734_01_standard.jpg",
        cantidad: 1
    },
    {
        id: 3,
        marca: "Adidas",
        modelo: "Aire Force2",
        genero: "Hombre",
        precio: 130,
        imagen: "../img/productos_adidas/mujer/3_Zapatillas_OZWEEGO_Rojo_HP6386_01_standard_1.jpg",
        cantidad: 1
    },
    {
        id: 4,
        marca: "Adidas",
        modelo: "Aire Force",
        genero: "Hombre",
        precio: 110,
        imagen: "../img/productos_adidas/mujer/4_Zapatillas_Response_Verde_IG0331_01_standard.jpg",
        cantidad: 1
    },
    {
        id: 5,
        marca: "Adidas",
        modelo: "Aire Force2",
        genero: "Hombre",
        precio: 120,
        imagen: "../img/productos_adidas/mujer/5_zapatillas-forum-mid.jpg",
        cantidad: 1
    },
    {
        id: 6,
        marca: "Adidas",
        modelo: "Aire Force2",
        genero: "Hombre",
        precio: 130,
        imagen: "../img/productos_adidas/mujer/6_zapatillas-gazelle.jpg",
        cantidad: 1
    },
    {
        id: 7,
        marca: "Adidas",
        modelo: "Aire Force",
        genero: "Hombre",
        precio: 110,
        imagen: "../img/productos_adidas/mujer/7_zapatillas-gazelle.jpg",
        cantidad: 1
    },
    {
        id: 8,
        marca: "Adidas",
        modelo: "Aire Force2",
        genero: "Hombre",
        precio: 120,
        imagen: "../img/productos_adidas/mujer/8_zapatillas-rivalry-low-86.jpg",
        cantidad: 1
    },
    {
        id: 9,
        marca: "Adidas",
        modelo: "Aire Force2",
        genero: "Hombre",
        precio: 130,
        imagen: "../img/productos_adidas/mujer/9_Zapatillas_Falcon_Beige_IG8303_01_standard.jpg",
        cantidad: 1
    },
];

let carrito = [];

const contenidoMujer = document.querySelector('#contenidomujer');
const verCarrito = document.querySelector('#vercarrito');
const modalcontainer = document.querySelector('#modalcontainer');
const cantidadCarrito = document.querySelector('#cantidadcarrito');

productosMujeres.forEach(( producto ) => {
    const contentProductMujer = document.createElement('div');
    contentProductMujer.classList.add('col-12', 'col-md-4', 'card', 'my-3', 'py-3');
    contentProductMujer.innerHTML = `
        <div>
            <img class="card-img-top" src="${producto.imagen}" alt="air force">
            <div class="card-body">
                <h3 class="card-title">${producto.modelo}</h3>
                <p class="card-text">${producto.genero}</p>
                <p class="card-text">S/. ${producto.precio}</p>
            </div>
        </div>
    `;
    contenidoMujer.append(contentProductMujer);

    const comprar = document.createElement("button");
    comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
    comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
    contentProductMujer.append(comprar);
    // console.log(comprar)
    // const comprar = document.querySelector('button');
    comprar.addEventListener("click", () => {
        const repeat = carrito.some((repeatProducto) => repeatProducto.id === producto.id);

        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === producto.id) {
                    prod.cantidad++;
                }
            })
        }
        else {
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                modelo: producto.modelo,
                precio: producto.precio,
                cantidad: producto.cantidad
            });
        };
        console.log(carrito)
        carritoCounter();
    });
});

function pintarCarrito() {
    modalcontainer.innerHTML = "";
    modalcontainer.style.display = "flex";
    const modalHeader = document.createElement('div');
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">Carrito de Compras</h1>
    `;
    modalcontainer.append(modalHeader);

    const modalbutton = document.createElement('h1');
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalcontainer.style.display = "none";
    })

    modalHeader.append(modalbutton);

    carrito.forEach((producto) => {
        const carritoContenido = document.createElement("div");
        carritoContenido.className = "modal-contenido";
        carritoContenido.innerHTML = `
        <img class="card" src="${producto.imagen}" alt="air force">
        <h3 class="card-title">${producto.modelo}</h3>
        <p class="card-text">S/. ${producto.precio}</p>
        <p class="card-text">Cantidad: ${producto.cantidad}</p>
        <p class="card-text">Total: ${producto.cantidad * producto.precio}</p>
        `;

        modalcontainer.append(carritoContenido);

        const eliminar = document.createElement('span');
        eliminar.innerText = "X";
        eliminar.className = "eliminar-producto";
        carritoContenido.append(eliminar);

        eliminar.addEventListener("click", eliminarProducto);
    });

    //acumulador: ac; objetos: ob
    const total = carrito.reduce((ac, ob) => ac + ob.precio * ob.cantidad, 0);

    const totalPrecios = document.createElement('div');
    totalPrecios.className = "total-contenido";
    totalPrecios.innerHTML = `Total a pagar: S/. ${total}`;

    modalcontainer.append(totalPrecios);

}
verCarrito.addEventListener("click", pintarCarrito);

function eliminarProducto () {
    const buscarId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== buscarId;
    });
    carritoCounter();
    pintarCarrito();
    
};

function carritoCounter () {
    // cantidadCarrito.style.display = "block";
    // cantidadCarrito.innerText = carrito.length;
    // console.log(carrito.length)
    const contarProducto = carrito.reduce((ac, ob) => ac + ob.cantidad, 0);
    cantidadCarrito.innerText = contarProducto;

    
}