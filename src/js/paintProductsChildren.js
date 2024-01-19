const contenidoNino = document.querySelector('#contenidonino')
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

export const getProductosN = async() => {
    const listaProductosN= await fetch ("/src/producto/g_productsListChildren.json");
    const dataProductosN = await listaProductosN.json();
    
    dataProductosN.forEach(( producto ) => {
        const contentProductNino = document.createElement('div');
        contentProductNino.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductNino.innerHTML = `
            
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.marca}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                </div>
            
        `;
        contenidoNino.append(contentProductNino);
    
        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductNino.append(comprar);

        contentProductNino.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });

    checkAdidas.addEventListener("change", e => {
        
        if(checkAdidas.checked){
            checkNike.checked = false;
            console.log(e.target.value)
            const productosNino = dataProductosN.filter(producto => producto.marca === e.target.value);
            console.log(productosNino);
            contenidoNino.innerHTML = "";
            productosNino.forEach(( producto ) => {
                const contentProductN = document.createElement("div");
                contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductN.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                    `;
                contenidoNino.appendChild(contentProductN);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductN.append(comprar);
    
                contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        else {
            contenidoNino.innerHTML = "";
            dataProductosN.forEach(( producto ) => {
                const contentProductN = document.createElement("div");
                contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductN.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                        
                    `;
                contenidoNino.appendChild(contentProductN);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductN.append(comprar);
        
                contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        
    });

    checkNike.addEventListener("change", e => {
        
        if(checkNike.checked){
            checkAdidas.checked = false;
            console.log(e.target.value)
            const productosNino = dataProductosN.filter(producto => producto.marca === e.target.value);
            console.log(productosNino);
            contenidoNino.innerHTML = "";
            productosNino.forEach(( producto ) => {
                const contentProductN = document.createElement("div");
                contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductN.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                    `;
                contenidoNino.appendChild(contentProductN);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductN.append(comprar);
    
                contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        else {
            contenidoNino.innerHTML = "";
            dataProductosN.forEach(( producto ) => {
                const contentProductN = document.createElement("div");
                contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductN.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                        
                    `;
                contenidoNino.appendChild(contentProductN);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductN.append(comprar);
        
                contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.precio >= e.target.min && producto.precio <= e.target.max);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    else {

        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.precio >= e.target.min && producto.precio <= e.target.max);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    else {

        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.precio >= e.target.min && producto.precio <= e.target.max);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    }
    else {

        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
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
        const productosNino = dataProductosN.filter(producto => producto.talla == e.target.value);
        console.log(productosNino);
        contenidoNino.innerHTML = "";
        productosNino.forEach(( producto ) => {
            const contentProductN = document.createElement("div");
            contentProductN.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
            contentProductN.innerHTML = `
                        <img class="card-img-top" src="${producto.imagen}" alt="air force">
                        <div class="card-body">
                            <h3 class="card-title">${producto.modelo}</h3>
                            <p class="card-text">${producto.marca}</p>
                            <p class="card-text">S/. ${producto.precio}</p>
                        </div>
                `;
            contenidoNino.appendChild(contentProductN);
    
            const comprar = document.createElement("button");
            comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
            comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
            contentProductN.append(comprar);

            contentProductN.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
        });
    });
};
