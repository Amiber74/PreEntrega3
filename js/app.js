const contenedor = document.querySelector("#contenido_index")

productos.forEach((prod)=>{
    let cont_prod = document.createElement("div")
    cont_prod.classList.add("tarjeta_prod")
    
    cont_prod.innerHTML =
    `<img src=${prod.imagen} alt=${prod.nombre}> 
    <div class="fondo_NombrePrecio">
    <h2> ${ prod.nombre} </h2>
    <p class="precio"> $${prod.precio} </p></div>
    <button><strong>¡Comprame!</strong></button>`
    
    contenedor.append(cont_prod)
})
