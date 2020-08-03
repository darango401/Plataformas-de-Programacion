const frm = document.getElementById('login');
function procesarDatos(){
  let usuario = localStorage.getItem("usuario");
  if(usuario){
    fetch('../procesar.php',{
      method: 'post',
      body:new FormData(frm)
    }).then(function(response) {
     return response.json(); 
   }).then(function(json) {
    validarLogin(json);
  }).catch(function(err) {
  });
}
}
function validarLogin(json){
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  if (usuario.contrasena == json.contrasena) {
    location.href = "contenido.html";
  }else{
    alert("Clave incorrecta");
  }
}