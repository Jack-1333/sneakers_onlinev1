
let carrito = [];

const contenidoHombre = document.querySelector('#contenidohombre');
const contenidoMujer = document.querySelector('#contenidomujer')
const contenidoNino = document.querySelector('#contenidonino')
const contenidoOferta = document.querySelector('#contenidooferta')
const verCarrito = document.querySelector('#vercarrito');
const modalcontainer = document.querySelector('#modalcontainer');


const getProductosH = async() => {
    const listaProductosH = await fetch ("/src/producto/e_productsListMen.json");
    const dataProductosH = await listaProductosH.json();
    const body = document.querySelector('body');
    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-12', 'col-md-4', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                <div>
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.genero}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
                </div>
            `;
        contenidoHombre.append(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);
        
        comprar.addEventListener("click", () => {
            
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                modelo: producto.modelo,
                precio: producto.precio
            });
        });
    });

    verCarrito.addEventListener("click", () => {
        const borrarMain = document.querySelector('#borrarmain')
        body.classList.add('no-scroll');
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
            body.classList.remove('no-scroll');
        })
    
        modalHeader.append(modalbutton);
    
        carrito.forEach((producto) => {
            const carritoContenido = document.createElement("div");
            carritoContenido.className = "modal-contenido";
            carritoContenido.innerHTML = `
            <img class="card" src="${producto.imagen}" alt="air force">
            <h3 class="card-title">${producto.modelo}</h3>
            <p class="card-text">S/. ${producto.precio}</p>
            `;
    
            modalcontainer.append(carritoContenido);
        });
    
        //acumulador: ac; objetos: ob
        const total = carrito.reduce((ac, ob) => ac + ob.precio, 0);
    
        const totalPrecios = document.createElement('div');
        totalPrecios.className = "total-contenido";
        totalPrecios.innerHTML = `<h2>Total a pagar: S/. ${total}</h2>`;
    
        modalcontainer.append(totalPrecios);
    
    });
};

getProductosH();

const getProductosM = async() => {
    const listaProductosM = await fetch ("/src/producto/f_productsListWomen.json");
    const dataProductosM = await listaProductosM.json();
    
    dataProductosM.forEach(( producto ) => {
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
            
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                modelo: producto.modelo,
                precio: producto.precio,
            });
        });
    });
    
    verCarrito.addEventListener("click", () => {
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
            `;
    
            modalcontainer.append(carritoContenido);
        });
    
        //acumulador: ac; objetos: ob
        const total = carrito.reduce((ac, ob) => ac + ob.precio, 0);
    
        const totalPrecios = document.createElement('div');
        totalPrecios.className = "total-contenido";
        totalPrecios.innerHTML = `Total a pagar: S/. ${total}`;
    
        modalcontainer.append(totalPrecios);
    
    });
};

getProductosM();

const getProductosN = async() => {
    const listaProductosN= await fetch ("/src/producto/g_productsListChildren.json");
    const dataProductosN = await listaProductosN.json();
    
    dataProductosN.forEach(( producto ) => {
        const contentProductNino = document.createElement('div');
        contentProductNino.classList.add('col-12', 'col-md-4', 'card', 'my-3', 'py-3');
        contentProductNino.innerHTML = `
            <div>
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.genero}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                </div>
            </div>
        `;
        contenidoNino.append(contentProductNino);
    
        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductNino.append(comprar);
        // console.log(comprar)
        // const comprar = document.querySelector('button');
        comprar.addEventListener("click", () => {
            
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                modelo: producto.modelo,
                precio: producto.precio,
            });
        });
    });
    
    verCarrito.addEventListener("click", () => {
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
            `;
    
            modalcontainer.append(carritoContenido);
        });
    
        //acumulador: ac; objetos: ob
        const total = carrito.reduce((ac, ob) => ac + ob.precio, 0);
    
        const totalPrecios = document.createElement('div');
        totalPrecios.className = "total-contenido";
        totalPrecios.innerHTML = `Total a pagar: S/. ${total}`;
    
        modalcontainer.append(totalPrecios);
    
    });
};

getProductosN();

const getProductosO = async() => {
    const listaProductosO= await fetch ("/src/producto/h_productsListOffers.json");
    const dataProductosO = await listaProductosO.json();
    
    dataProductosO.forEach(( producto ) => {
        const contentProductOferta = document.createElement('div');
        contentProductOferta.classList.add('col-12', 'col-md-4', 'card', 'my-3', 'py-3');
        contentProductOferta.innerHTML = `
            <div>
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.genero}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                </div>
            </div>
        `;
        contenidoOferta.append(contentProductOferta);
    
        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductOferta.append(comprar);
        // console.log(comprar)
        // const comprar = document.querySelector('button');
        comprar.addEventListener("click", () => {
            
            carrito.push({
                id: producto.id,
                imagen: producto.imagen,
                modelo: producto.modelo,
                precio: producto.precio,
            });
        });
    });
    
    verCarrito.addEventListener("click", () => {
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
            `;
    
            modalcontainer.append(carritoContenido);
        });
    
        //acumulador: ac; objetos: ob
        const total = carrito.reduce((ac, ob) => ac + ob.precio, 0);
    
        const totalPrecios = document.createElement('div');
        totalPrecios.className = "total-contenido";
        totalPrecios.innerHTML = `Total a pagar: S/. ${total}`;
    
        modalcontainer.append(totalPrecios);
    
    });
};

getProductosO();