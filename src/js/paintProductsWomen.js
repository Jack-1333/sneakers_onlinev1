const contenidoMujer = document.querySelector('#contenidomujer')
const checkAdidas = document.querySelector('.checkadidas');
const checkNike = document.querySelector('.checknike');

export const getProductosM = async() => {
    const listaProductosM = await fetch ("/src/producto/f_productsListWomen.json");
    const dataProductosM = await listaProductosM.json();
    const body = document.querySelector('body');

    dataProductosM.forEach(( producto ) => {
        const contentProductMujer = document.createElement('div');
        contentProductMujer.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
        contentProductMujer.innerHTML = `
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.marca}</p>
                    <p class="card-text">S/. ${producto.precio}</p>
                </div>
        `;
        contenidoMujer.append(contentProductMujer);
    
        const comprar = document.createElement("button");
        comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
        comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
        contentProductMujer.append(comprar);

        contentProductMujer.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
    });

    checkAdidas.addEventListener("change", e => {
        
        if(checkAdidas.checked){
            checkNike.checked = false;
            console.log(e.target.value)
            const productosMujer = dataProductosM.filter(producto => producto.marca === e.target.value);
            console.log(productosMujer);
            contenidoMujer.innerHTML = "";
            productosMujer.forEach(( producto ) => {
                const contentProductM = document.createElement("div");
                contentProductM.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductM.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                    `;
                contenidoMujer.appendChild(contentProductM);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductM.append(comprar);
    
                contentProductM.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        else {
            contenidoMujer.innerHTML = "";
            dataProductosM.forEach(( producto ) => {
                const contentProductM = document.createElement("div");
                contentProductM.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductM.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                        
                    `;
                contenidoMujer.appendChild(contentProductM);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductM.append(comprar);
        
                contentProductM.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        
    });
    checkNike.addEventListener("change", e => {
        
        if(checkNike.checked){
            checkAdidas.checked = false;
            console.log(e.target.value)
            const productosMujer = dataProductosM.filter(producto => producto.marca === e.target.value);
            console.log(productosMujer);
            contenidoMujer.innerHTML = "";
            productosMujer.forEach(( producto ) => {
                const contentProductM = document.createElement("div");
                contentProductM.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductM.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                    `;
                contenidoMujer.appendChild(contentProductM);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductM.append(comprar);
    
                contentProductM.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        else {
            contenidoMujer.innerHTML = "";
            dataProductosM.forEach(( producto ) => {
                const contentProductM = document.createElement("div");
                contentProductM.classList.add('col-6', 'col-md-4', 'col-xl-3', 'card', 'my-3', 'py-3');
                contentProductM.innerHTML = `
                            <img class="card-img-top" src="${producto.imagen}" alt="air force">
                            <div class="card-body">
                                <h3 class="card-title">${producto.modelo}</h3>
                                <p class="card-text">${producto.marca}</p>
                                <p class="card-text">S/. ${producto.precio}</p>
                            </div>
                        
                    `;
                contenidoMujer.appendChild(contentProductM);
        
                const comprar = document.createElement("button");
                comprar.innerHTML = `Comprar <i class="bi bi-cart4"></i>`
                comprar.classList.add('btn','btn-primary','d-block','fs-2','fw-bold', 'text-uppercase', 'rounded-pill');
                contentProductM.append(comprar);
        
                contentProductM.getElementsByTagName("button")[0].addEventListener("click", () => addCarrito(producto));
            });
        }
        
    });

};

