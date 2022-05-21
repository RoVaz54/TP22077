{/* <h2>Nuestros Productos</h2> */}
{/* <div class="card" style="width:31%; float:left; margin:1% 1%"> */}
{/* <img class="card-img-top" src="${data[i].imagen}" alt="Card image" style="width:100%"> */}
{/* <p class="card-text">${data[i].descripcion}</p>  */}

if ( document.getElementById( "productos" )) {
  cad=`
     <h2>Nuestros Productos</h2>
     <div class="prodcont">
     <div class="container">
       
       `
       for(var i=0; i<data.length; i++){
         cad+=`
            <div class="card" >
             <img class="card-img-top" src="${data[i].imagen}" alt="Prod image" style="width:100%">
             <div class="card-body">
                 <h4 class="card-title">${data[i].nombre}</h4> 
                 <a href="#" class="btn btn-primary">Ver Producto</a>
             </div>
           </div>
         `
       }

     cad+=`  
     </div>
     </div>
     `

     console.log(cad);
 document.getElementById("productos").innerHTML=cad;
}

function valida_envia() {
  // Valido Nombre
  if (document.val_form.nombre.value.length == 0) {
      alert("Tiene que escribir su nombre")
      document.val_form.nombre.focus()
      return 0;
  }
  // Valido Apellido
  if (document.val_form.apellido.value.length == 0) {
    alert("Tiene que escribir su nombre")
    document.val_form.apellido.focus()
    return 0;
  }
  // Formulario Ok
  alert("Muchas gracias por enviar su consulta");
   val_form.reset();

}
