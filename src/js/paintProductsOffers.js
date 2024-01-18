const contenidoOferta = document.querySelector('#contenidooferta')
const checkAdidas = document.querySelector('.checkadidas');
const checkNike = document.querySelector('.checknike');


export const getProductosO = async() => {
    const listaProductosO= await fetch ("/src/producto/h_productsListOffers.json");
    const dataProductosO = await listaProductosO.json();
    
    dataProductosO.forEach(( producto ) => {
        const contentProductOferta = document.createElement('div');
        contentProductOferta.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductOferta.innerHTML = `
            
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.marca}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                </div>
            
        `;
        contenidoOferta.append(contentProductOferta);
    
        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductOferta.append(comprar);

        contentProductOferta.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });

    checkAdidas.addEventListener("change", e => {
        
        if(checkAdidas.checked){
            checkNike.checked = false;
            console.log(e.target.value)
            const productosOferta = dataProductosO.filter(producto => producto.marca === e.target.value);
            console.log(productosOferta);
            contenidoOferta.innerHTML = "";
            productosOferta.forEach(( producto ) => {
                const contentProductO = document.createElement("div");
                contentProductO.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductO.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                    `;
                contenidoOferta.appendChild(contentProductO);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductO.append(comprar);
    
                contentProductO.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        else {
            contenidoOferta.innerHTML = "";
            dataProductosO.forEach(( producto ) => {
                const contentProductO = document.createElement("div");
                contentProductO.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductO.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                        
                    `;
                contenidoOferta.appendChild(contentProductO);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductO.append(comprar);
        
                contentProductO.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        
    });
    checkNike.addEventListener("change", e => {
        
        if(checkNike.checked){
            checkAdidas.checked = false;
            console.log(e.target.value)
            const productosOferta = dataProductosO.filter(producto => producto.marca === e.target.value);
            console.log(productosOferta);
            contenidoOferta.innerHTML = "";
            productosOferta.forEach(( producto ) => {
                const contentProductO = document.createElement("div");
                contentProductO.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductO.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                    `;
                contenidoOferta.appendChild(contentProductO);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductO.append(comprar);
    
                contentProductO.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        else {
            contenidoOferta.innerHTML = "";
            dataProductosO.forEach(( producto ) => {
                const contentProductO = document.createElement("div");
                contentProductO.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductO.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                        
                    `;
                contenidoOferta.appendChild(contentProductO);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductO.append(comprar);
        
                contentProductO.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        
    });
};
