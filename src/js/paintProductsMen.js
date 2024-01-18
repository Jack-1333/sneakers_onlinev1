const contenidoHombre = document.querySelector('#contenidohombre');
const checkAdidas = document.querySelector('.checkadidas');
const checkNike = document.querySelector('.checknike');

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
        
    if(checkAdidas.checked){
        checkNike.checked = false;
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
        
    if(checkNike.checked){
        checkAdidas.checked = false;
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
};


