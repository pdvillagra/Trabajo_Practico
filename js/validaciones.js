const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
nombre: /^[a-zA-Z]{3,16}$/,
apellido: /^[a-zA-Z]{1,20}$/,
telefono: /^\d{7,14}$/,
email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/,
adultos: /^\d{1}$/,
ninos: /^\d{1}$/
}



const validarFormulario = (e) => {
  
    switch(e.target.name) {
      case "nombre":
        validarCampo(expresiones.nombre, e.target, 'nombre');
      break;
      case "apellido":
            validarCampo(expresiones.apellido, e.target, 'apellido');

      break;
      case "telefono":
        validarCampo(expresiones.telefono, e.target, 'telefono');

      break;
      case "email":
        validarCampo(expresiones.email, e.target, 'email');

      break;

      case "adultos":
        validarCampo(expresiones.adultos, e.target, 'adultos');

      break;

      case "ninos":
        validarCampo(expresiones.ninos, e.target, 'ninos');

      break;

      case "ingreso":
            console.log("cool");

      break;
      case "egreso":
            console.log("cool");

      break;
      

      

    }

}

const validarCampo = (expresion, input, campo) => {

    if(expresion.test(input.value)){
        document.getElementById(`formulario__${campo}`).classList.remove('formulario__grupo-incorrecto');
        document.getElementById(`formulario__${campo}`).classList.add('formulario__grupo-correcto');
        document.querySelector(`#formulario__${campo} .formulario__input-error`).classList.remove('formulario__mensaje-activo');
    
    } else{
           document.getElementById(`formulario__${campo}`).classList.add('formulario__grupo-incorrecto'); 
           document.getElementById(`formulario__${campo}`).classList.remove('formulario__grupo-correcto'); 
           document.querySelector(`#formulario__${campo} .formulario__input-error`).classList.add('formulario__mensaje-activo');
        
        }
}

inputs.forEach((input) =>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

    });





console.log('hola mundo');