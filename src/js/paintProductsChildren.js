const contenidoNino = document.querySelector('#contenidonino')
const checkAdidas = document.querySelector('.checkadidas');
const checkNike = document.querySelector('.checknike');

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
};
