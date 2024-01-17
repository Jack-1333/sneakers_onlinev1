
const contenidoHombre = document.querySelector('#contenidohombre');
const contenidoMujer = document.querySelector('#contenidomujer')
const contenidoNino = document.querySelector('#contenidonino')
const contenidoOferta = document.querySelector('#contenidooferta')

const getProductosH = async() => {
    const listaProductosH = await fetch ("/src/producto/e_productsListMen.json");
    const dataProductosH = await listaProductosH.json();
    const body = document.querySelector('body');
    dataProductosH.forEach(( producto ) => {
        const contentProductH = document.createElement("div");
        contentProductH.classList.add('col-12', 'col-md-6', 'col-xl-4', 'card', 'my-3', 'py-3');
        contentProductH.innerHTML = `
                
                    <img class="card-img-top" src="${producto.imagen}" alt="air force">
                    <div class="card-body">
                        <h3 class="card-title">${producto.modelo}</h3>
                        <p class="card-text">${producto.genero}</p>
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
};

getProductosH();

const getProductosM = async() => {
    const listaProductosM = await fetch ("/src/producto/f_productsListWomen.json");
    const dataProductosM = await listaProductosM.json();
    
    dataProductosM.forEach(( producto ) => {
        const contentProductMujer = document.createElement('div');
        contentProductMujer.classList.add('col-12', 'col-md-6', 'col-xl-4', 'card', 'my-3', 'py-3');
        contentProductMujer.innerHTML = `
            
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.genero}</p>
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
};

getProductosM();

const getProductosN = async() => {
    const listaProductosN= await fetch ("/src/producto/g_productsListChildren.json");
    const dataProductosN = await listaProductosN.json();
    
    dataProductosN.forEach(( producto ) => {
        const contentProductNino = document.createElement('div');
        contentProductNino.classList.add('col-12', 'col-md-6', 'col-xl-4', 'card', 'my-3', 'py-3');
        contentProductNino.innerHTML = `
            
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.genero}</p>
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
};

getProductosN();

const getProductosO = async() => {
    const listaProductosO= await fetch ("/src/producto/h_productsListOffers.json");
    const dataProductosO = await listaProductosO.json();
    
    dataProductosO.forEach(( producto ) => {
        const contentProductOferta = document.createElement('div');
        contentProductOferta.classList.add('col-12', 'col-md-6', 'col-xl-4', 'card', 'my-3', 'py-3');
        contentProductOferta.innerHTML = `
            
                <img class="card-img-top" src="${producto.imagen}" alt="air force">
                <div class="card-body">
                    <h3 class="card-title">${producto.modelo}</h3>
                    <p class="card-text">${producto.genero}</p>
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
};

getProductosO();