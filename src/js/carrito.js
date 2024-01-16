function addCarrito(producto) {
    const memoria = JSON.parse(localStorage.getItem("snikers"));
    console.log(memoria);

    if(!memoria) {
        const nuevoProducto = getNuevoProductoMemoria(producto);
        localStorage.setItem("snikers", JSON.stringify([nuevoProducto]));
    }
    else {
        const indiceProducto = memoria.findIndex(sniker => sniker.id === producto.id);
        console.log(indiceProducto);
        const nuevaMemoria = memoria;
        if(indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoMemoria(producto));
        }
        else {
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("snikers", JSON.stringify(nuevaMemoria));
    }
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
    const cuenta = memoria.reduce((ac, ob) => ac + ob.cantidad, 0);
    cantidadCarrito.innerText = cuenta;
}

updateNumeroCarrito();