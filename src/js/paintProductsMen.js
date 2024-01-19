const contenidoHombre = document.querySelector('#contenidohombre');
const checkAdidas = document.querySelector('.checkadidas');
const checkNike = document.querySelector('.checknike');
const checkPrecio1 = document.querySelector('.checkprecio1')
const checkPrecio2 = document.querySelector('.checkprecio2')
const checkPrecio3 = document.querySelector('.checkprecio3')
const talla1 = document.querySelector('#talla1')
const talla2 = document.querySelector('#talla2')
const talla3 = document.querySelector('#talla3')
const talla4 = document.querySelector('#talla4')
const talla5 = document.querySelector('#talla5')
const talla6 = document.querySelector('#talla6')
const talla7 = document.querySelector('#talla7')
const talla8 = document.querySelector('#talla8')
const talla9 = document.querySelector('#talla9')
const talla10 = document.querySelector('#talla10')
const talla11 = document.querySelector('#talla11')
const talla12 = document.querySelector('#talla12')

export const getProductosH = async() => {
    const listaProductosH = await fetch ("/src/producto/e_productsListMen.json");
    const dataProductosH = await listaProductosH.json();
    const body = document.querySelector('body');

    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
    
    checkAdidas.addEventListener("change", e => {
        e.preventDefault();
        
    if(checkAdidas.checked){
        checkNike.checked = false;
        checkPrecio1.checked = false;
        checkPrecio2.checked = false;
        checkPrecio3.checked = false;
        console.log(e.target.value)
        const productosHombre = dataProductosH.filter(producto => producto.marca === e.target.value);
        console.log(productosHombre);
        contenidoHombre.innerHTML = "";
        productosHombre.forEach(( producto ) => {
            const contentProductH = document.createElement("div");
            contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductH.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoHombre.appendChild(contentProductH);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductH.append(comprar);

            contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    else {
        contenidoHombre.innerHTML = "";
        dataProductosH.forEach(( producto ) => {
            const contentProductH = document.createElement("div");
            contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductH.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                    
                `;
            contenidoHombre.appendChild(contentProductH);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductH.append(comprar);
    
            contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    
});
    checkNike.addEventListener("change", e => {
        e.preventDefault();
    if(checkNike.checked){
        checkAdidas.checked = false;
        checkPrecio1.checked = false;
        checkPrecio2.checked = false;
        checkPrecio3.checked = false;
        console.log(e.target.value)
        const productosHombre = dataProductosH.filter(producto => producto.marca === e.target.value);
        // console.log(dataProductosH);
        console.log(productosHombre);
        contenidoHombre.innerHTML = "";
        productosHombre.forEach(( producto ) => {
            const contentProductH = document.createElement("div");
            contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductH.innerHTML = `
                    
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                    
                `;
            contenidoHombre.appendChild(contentProductH);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductH.append(comprar);

            contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    else {
        contenidoHombre.innerHTML = "";
        dataProductosH.forEach(( producto ) => {
            const contentProductH = document.createElement("div");
            contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductH.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                    
                `;
            contenidoHombre.appendChild(contentProductH);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductH.append(comprar);
    
            contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    
});


checkPrecio1.addEventListener("change", e => {
    e.preventDefault();
    
if(checkPrecio1.checked){
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.min)
    const productosHombre = dataProductosH.filter(producto => producto.precio >= e.target.min && producto.precio <= e.target.max);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}
else {
    contenidoHombre.innerHTML = "";
    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
                
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}

});
checkPrecio2.addEventListener("change", e => {
    e.preventDefault();
    
if(checkPrecio2.checked){
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.min)
    const productosHombre = dataProductosH.filter(producto => producto.precio >= e.target.min && producto.precio <= e.target.max);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}
else {
    contenidoHombre.innerHTML = "";
    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
                
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}

});
checkPrecio3.addEventListener("change", e => {
    e.preventDefault();
    
if(checkPrecio3.checked){
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    console.log(e.target.min)
    const productosHombre = dataProductosH.filter(producto => producto.precio >= e.target.min && producto.precio <= e.target.max);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}
else {
    contenidoHombre.innerHTML = "";
    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
                
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
}

});


talla1.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla2.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla3.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla4.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla5.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla6.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla7.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla8.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla9.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla10.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla11.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});
talla12.addEventListener("click", e => {
    e.preventDefault();
    checkAdidas.checked = false;
    checkNike.checked = false;
    checkPrecio1.checked = false;
    checkPrecio2.checked = false;
    checkPrecio3.checked = false;
    console.log(e.target.value)
    const productosHombre = dataProductosH.filter(producto => producto.talla == e.target.value);
    console.log(productosHombre);
    contenidoHombre.innerHTML = "";
    productosHombre.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.marca}</p>
                        <p class="card-text">S/. ${producto.precio}</p>
                    </div>
            `;
        contenidoHombre.appendChild(contentProductH);

        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductH.append(comprar);

        contentProductH.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });
});

};


