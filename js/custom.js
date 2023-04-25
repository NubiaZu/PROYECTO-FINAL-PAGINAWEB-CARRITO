/* Definir función addCarrito */
function addCarrito(e) {
    /* Obtener el elemento donde se hizo clic */
    let elementoBoton = e.target;
    /* Obtener el elemento padre del boton */
    let elementoArticulo = elementoBoton.parentElement;
    /* Array del articulo */
    let objetoArticulo = new Array();
    /* Llenar los datos del Articulo */
    objetoArticulo.push(elementoArticulo.querySelector("h4").innerHTML);
    objetoArticulo.push(elementoArticulo.querySelector(".precio").innerHTML);

    /* Obtener elemento cuerpo de Modal */
    let cuerpoModal = document.querySelector("#ventanaCarrito > div > div> div.modal-body")

    /* Vaciar cuerpo de Modal si no tiene items */
    if (cuerpoModal.querySelector("table") == null) {
        cuerpoModal.innerHTML = "";
    }

    /* Crear nuevo elemento con el contenido del articulo */
    let intemModal = document.createElement("div");
    intemModal.innerHTML = `     
     <table class="table">
     <tr>
        <td>
         <h5>${objetoArticulo[0]}</h5>        
        <p> precio: <span class="precio">${objetoArticulo[1]}</span</p>
        <td>
             </tr>
     </table>
     `;

    /* Insertar el elemento en el cuerpo Modal */
    cuerpoModal.append(intemModal);

    /* Mensaje informando de que se agrego el producto */
    alert("Se agregó el producto al carrito");

}

/* Definir función limpiarCarrito */
function limpiarCarrito(){
    /* Solicitar confirmación */
    let estado = confirm("¿Estás seguro de limpiar el carrito?")
     /* Si se confirma */
     if(estado){
    /* Obtener elemento cuerpo de Modal*/
    let cuerpoModal = document.querySelector("#ventanaCarrito > div > div> div.modal-body")
    /* Reemplazar contenido*/
    cuerpoModal.innerHTML = `
    <picture>
     <img id="imagencarritovacio" class="img-fluid mx-auto d-block" src="image/recursos/carrito-vacio.png"
							alt="carrito-vacio"></picture><br>
					<p class="text-center">El Carrito está Vacío.</p>

                    `;
                }                   
                    
}


