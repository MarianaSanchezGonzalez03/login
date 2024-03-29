//declaracion de variables de referancia a objetos 
const nombre = document.getElementById('name');
const email = document.getElementById('email');
const user = document.getElementById('user');
const pass = document.getElementById('pass');
const formulario = document.getElementById('formRegistro');

formulario.addEventListener('submit', registro);

function registro(e){
    e.preventDefault();

    let nombreVal = nombre.value;
    let emailVal = email.value;
    let userVal = user.value;
    let passValue = pass.value;

    if(nombreVal == '' || emailVal == '' || userVal == '' || passValue == ''){
        creaMessaje('Verifica tus campos', 'danger');
        return;

    }

    const usuario ={
        nombre: nombreVal,
        email: emailVal,
        user: userVal,
        pass: passValue
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    nombre.value = '';
    email.value = '';
    user.value = '';
    pass.value = '';

    creaMessaje('Usurio Registrado!', 'success');

}

function creaMessaje(texto, tipo){
    const nuevoElemento = document.createElement('div');
    nuevoElemento.innerText = texto;
    nuevoElemento.classList.add('alert', 'alert-' + tipo);
    const divMensaje = document.getElementById('mensaje');
    divMensaje.appendChild(nuevoElemento);
    setTimeout(function(){
        nuevoElemento.remove();
    }, 2000);
}
