//import "bootstrap"

//var myModal = new bootstrap.Modal(document.querySelector('#modal-danger'));


var usuario_local = 'kevin'
var contrasehna_local = '1234'

function Login(){
  var modal = document.querySelector('#Modal-Danger2');
  
  var form = document.forms['form-1']
  var usuario = form['usuario'].value;
  var contrasehna = form['contrasehna'].value;
  
  if (usuario_local == usuario && contrasehna_local == contrasehna){
    window.location.assign('dasboard.html');
  }
  else{
    var mensaje = document.querySelector('#modal__mensaje');
    mensaje.innerHTML = "Usuario o contraseña incorrectas";
    modal.click();
  }

}
