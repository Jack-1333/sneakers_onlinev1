function addCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("snikers"));
    console.log(memoria);  
    let contar = 0;
    if(!memoria) {
        const nuevoProducto = getNuevoProductoMemoria(producto);
        localStorage.setItem("snikers", JSON.stringify([nuevoProducto]));
        contar = 1;
    }
    else {
        const indiceProducto = memoria.findIndex(sniker => sniker.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoMemoria(producto));
            contar = 1;
        }
        else {
            nuevaMemoria[indiceProducto].cantidad ++;
            contar = nuevaMemoria[indiceProducto].cantidad;
        }
        localStorage.setItem("snikers", JSON.stringify(nuevaMemoria));
        
    }
    updateNumeroCarrito();
    return contar;
}

function restarCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("snikers"));
    const indiceProducto = memoria.findIndex(sniker => sniker.id === producto.id);
    if(memoria[indiceProducto].cantidad === 1) {
        memoria.splice(indiceProducto, 1);
    }
    else {
        memoria[indiceProducto].cantidad --;
    }
    localStorage.setItem("snikers", JSON.stringify(memoria));
    updateNumeroCarrito();
}


/* Toma un producto le agrega cantidad q y lo devuelve*/
function getNuevoProductoMemoria(producto) {
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

const cantidadCarrito = document.querySelector('#cantidadcarrito');
function updateNumeroCarrito() {
    const memoria = JSON.parse(localStorage.getItem("snikers"));
    if (memoria && memoria.length > 0) {
        const cuenta = memoria.reduce((ac, ob) => ac + ob.cantidad, 0);
        cantidadCarrito.innerText = cuenta;
    }
    else {
        cantidadCarrito.innerText = 0;
    }

}

updateNumeroCarrito();