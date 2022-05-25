function ValidateEmail(inputText)
{
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(inputText.value.match(mailformat))
    {
    return true;
    }
    else
    {
    return false;
    }
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
    alert("Tiene que escribir su Apellido")
    document.val_form.apellido.focus()
    return 0;
  }
    // Valido Mail
    if (document.val_form.mail.value.length == 0) {
      alert("Tiene que escribir su dirección de mail.")
      document.val_form.mail.focus()
      return 0; 
    } else {
      console.log ("Val mail");
      if (ValidateEmail(document.val_form.mail))  {
      } else {  
      alert("Dirección de mail invalida, escribir correctamente.")
      document.val_form.mail.focus()
      return 0;
      }
    }
    // Valido Comentarios
    if (document.val_form.comentarios.value.length == 0) {
      alert("Tiene que escribir una consulta")
      document.val_form.comentarios.focus()
      return 0;
    }    


  // Formulario Ok
  alert("Muchas gracias por enviar su consulta");
   val_form.reset();

}
