const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    nombre: /^[a-zA-z]{3,20}$/, 
    apellido:/^[a-zA-z]{2,35}$/,
    usuario: /^[a-zA-Z0-9]{4,16}$/, 
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    contrasena: /^.{4,12}$/
	
}
const campos = {
    nombre: false,
    apellido: false,
    usuario: false,
    correo: false,
    contrasena: false,
    departamento: false,
    municipio: false
}
const validarSelects = (e)=>{
	const indice = document.getElementById('formulario select');
	if( indice == null || indice == 0 ) {
 	 return false;
	}else{
		return true;
	}
}
const validarFormulario = (e)=>{
    // console.log(e.target.name);
    switch(e.target.name){
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
        break;
        case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');
        break;
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');
        break;
        case "correo":
            validarCampo(expresiones.correo, e.target, 'correo');
        break;
        case "departamento":
            validarCampo(expresiones.correo, e.target, 'departamento');
        break;
        case "municipio":
            validarCampo(expresiones.correo, e.target, 'municipio');
        break;
        case "contrasena":
            validarCampo(expresiones.contrasena, e.target, 'contrasena');
            validarContrasena();
        break;
        case "contrasena2":
            validarContrasena();
        break;
    }
    
}
const validarCampo = (expresion,input,campo) => {
    if(expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-correcto');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.remove('formulario_input-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupo-correcto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupo-incorrecto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_input-error`).classList.add('formulario_input-error-activo');
        campos[campo] = false;
    }
}
const validarContrasena = () => {
	const inputPassword1 = document.getElementById('contrasena');
	const inputPassword2 = document.getElementById('contrasena2');

	if(inputPassword1.value !== inputPassword2.value){
		document.getElementById(`grupo_contrasena2`).classList.add('formulario_grupo-incorrecto');
		document.getElementById(`grupo_contrasena2`).classList.remove('formulario_grupo-correcto');
		document.querySelector(`#grupo_contrasena2 i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_contrasena2 i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_contrasena2 .formulario_input-error`).classList.add('formulario_input-error-activo');
		campos['contrasena'] = false;
	} else {
		document.getElementById(`grupo_contrasena2`).classList.remove('formulario_grupo-incorrecto');
		document.getElementById(`grupo_contrasena2`).classList.add('formulario_grupo-correcto');
		document.querySelector(`#grupo_contrasena2 i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_contrasena2 i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_contrasena2 .formulario_input-error`).classList.remove('formulario_input-error-activo');
		campos['contrasena2'] = true;
	}
}
inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});
formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	if(campos.nombre && campos.apellido && campos.usuario && campos.correo && campos.contrasena){
		formulario.reset();

		document.getElementById('formulario_mensaje-exito').classList.add('formulario_mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario_mensaje-exito').classList.remove('formulario_mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.formulario_grupo-correcto').forEach((icono) => {
			icono.classList.remove('formulario_grupo-correcto');
		});
	} else {
		document.getElementById('formulario_mensaje').classList.add('formulario_mensaje-activo');
	}
});

