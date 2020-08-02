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
        document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
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
function cambio(){
    var ciudades=
    [["Leticia"],
    ["Medellín","Envigado","Sabaneta","Bello"],
     ["Arauca","Arauquita","Saravena"],
     ["Barranquilla"],
     ["Cartagena"],
    ["Tunja"],
     ["Manizales"],
     ["Florencia"],
     ["Yopal"],
     ["Popayan"],
     ["Valledupar"],
     ["Quibdo"],
    ["Monteria"],
     ["Bogota","Bituima","Chipaque","Ubaque","Cota"],
    ["Inirida"],
   ["San Jose del Guaviare"],
   ["Neiva"],
   ["Rioacha"],
   ["Santa Marta","Algarrobo","Concordia"],
   ["Villavicencio"],
   ["Pasto"],
   ["Cucuta"],
   ["Mocoa"],
   ["Armenia"],
   ["Pereira","Dosquebradas","La Virginia","Santa Rosa De Cabal"],
   ["San Andres"],
   ["Bucaramanga"],
   ["Sincelejo"],
   ["Ibague"],
   ["Cali","Buga","Palmira","Cartago"],
   ["Mitu"],
   ["Puerto Carreño"]];
    var arreglo;
    var select_departamentos = document.getElementById("departamento");
    var select_municipio = document.getElementById("municipio");
    arreglo=ciudades[select_departamentos.value];
    select_municipio.innerHTML = "";
    for(var i=0; i < arreglo.length; i++){ 
        var option = document.createElement("option"); 
        option.innerHTML = ciudades[select_departamentos.value][i];
        select_municipio.appendChild(option); 
    } 
}


