const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    usuario: /^[a-zA-Z0-9]{4,16}$/, 
    nombre: /^[a-zA-z]{3,20}$/, 
    apellido: /^[a-zA-z]{2,35}$/,
    contrasena: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    
}

const campos = {
    usuario: false,
    apellido: false,
    nombre: false,
    contrasena: false,
    correo: false,
    
}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "contrasena":
            validarCampo(expresiones.contrasena, e.target, 'contrasena');
            validarContrasena();
        break;
        case "contrasena2":
            validarContrasena();
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos[campo] = false;
    }
}

const validarContrasena = () => {
    const inputPassword1 = document.getElementById('contrasena');
    const inputPassword2 = document.getElementById('contrasena2');

    if(inputPassword1.value !== inputPassword2.value){
        document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.add('formulario__input-error-activo');
        campos['contrasena'] = false;
    } else {
        document.getElementById(`grupo__contrasena2`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`grupo__contrasena2`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#grupo__contrasena2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__contrasena2 i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__contrasena2 .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos['contrasena'] = true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    const terminos = document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.contrasena && campos.correo && campos.apellido  ){
        formulario.reset();

        document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
        }, 5000);


        document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo-correcto');
        });
    } else {
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
    }
});
function cargar() {
    var deptos = ["AMAZONAS","ANTIOQUIA","ARAUCA","ATLANTICO","BOLIVAR","BOYACA","CALDAS","CAQUETA","CASANARE","CAUCA","CESAR","CHOCO","CORDOBA","CUNDINAMARCA","GUAINIA","GUAJIRA","GUAVIARE","HUILA","MAGDALENA","META","NORTE DE SANTANDER","NARINO","PUTUMAYO","QUINDIO","RISARALDA","SAN ANDRES","SANTANDER","SUCRE","TOLIMA","VALLE DEL CAUCA","VAUPES","VICHADA"];//Tu array de provincias
    var select = document.getElementById("departamento"); //Seleccionamos el select
    
    for(var i=0; i < deptos.length; i++){ 
        var option = document.createElement("option"); //Creamos la opcion
        option.innerHTML = deptos[i]; //Metemos el texto en la opción
        select.appendChild(option); //Metemos la opción en el select
    }
}
cargar();
let municipio, departamento;
let ciudades = [];
ciudades[0] = ["leticia|Leticia",];
ciudades[1] = ["medellin|Medellín","envigado|Envigado","sabaneta|Sabaneta","bello|Bello"];
ciudades[2] = ["arauca|Arauca","arauquita|Arauquita","saravena|Saravena" ];
ciudades[3] = ["barranquilla|Barranquilla"];
ciudades[4] = ["cartagena|Cartagena"];
ciudades[5] = ["tunja|Tunja"];
ciudades[6] = ["manizales|Manizales"];
ciudades[7] = ["florencia|Florencia"];
ciudades[8] = ["yopal|Yopal"];
ciudades[9] = ["popayan|Popayan"];
ciudades[10] = ["valledupar|Valledupar"];
ciudades[11] = ["quibdo|Quibdo"];
ciudades[12] = ["monteria|Monteria"];
ciudades[13] = ["bogota|Bogota","bituima|Bituima","chipaque|Chipaque","ubaque|Ubaque","cota|Cota"];
ciudades[14] = ["inirida|Inirida"];
ciudades[15] = ["san jose del guaviare|San Jose del Guaviare"];
ciudades[16] = ["neiva|Neiva"];
ciudades[17] = ["rioacha|Rioacha"];
ciudades[18] = ["santa Marta|Santa Marta","algarrobo|Algarrobo","concordia|Concordia"];
ciudades[19] = ["villavicencio|Villavicencio"];
ciudades[20] = ["pasto|Pasto"];
ciudades[21] = ["cucuta|Cucuta"];
ciudades[22] = ["mocoa|Mocoa"];
ciudades[23] = ["armenia|Armenia"];
ciudades[24] = ["pereira|Pereira","dosquebradas|Dosquebradas","la virginia|La Virginia","santa rosa de cabal|Santa Rosa De Cabal"];
ciudades[25] = ["san andres|San Andres"];
ciudades[26] = ["bucaramanga|Bucaramanga"];
ciudades[27] = ["sincelejo|Sincelejo"];
ciudades[28] = ["ibague|Ibague"];
ciudades[29] = ["cali|Cali","buga|Buga","palmira|Palmira","cartago|Cartago"];
ciudades[30] = ["mitu|Mitu"];
ciudades[31] = ["puerto carreño|Puerto Carreño"];
window.onload = ()=>{
    select_departamentos = document.getElementById("departamento");
    municipio = document.getElementById("municipio");
}

function Cambio(){
    let ArregloOpciones;
    municipio.innerHTML = "";
    ArregloOpciones=ciudades[select_departamentos.value];
    for(var opcion in ArregloOpciones){
        var arreglo = ArregloOpciones[opcion].split("|");
        var nuevaOpcion = document.createElement("option");
        nuevaOpcion.value = arreglo[0];
        nuevaOpcion.innerHTML = arreglo[1];
        municipio.appendChild(nuevaOpcion);
    }
}
