//usuarios preregistrados
var users = [
    { usuarios: "Luis", contras: 1234},
    { usuarios: "David", contras: 4321},
    { usuarios: "Yarek", contras: 2023}
];

//inicio de sesion
function comparar(){

    var userimput = document.getElementById('usuario').value
    var contraimput = parseInt(document.getElementById('contra').value)

    var login = false;

    for(var i = 0; i < users.length; i++){
        if(userimput === users[i].usuarios && contraimput === users[i].contras ){
            login = true;
            window.location.href = "inicio.html"
            break;
        }
    }

    if(login){
        alert("inicio de sesión correcto")
    }else{
        alert("inicio de sesión fallido")
    }

    document.getElementById("formulario").reset();

    displayUsers();
}


//registro(no registra para el inicio de sesion pq no tiene base de datos)
function registerUser(){

    const Newusuario = (document.getElementById('register_usuario').value)
    const Newcontra = (document.getElementById('register_contra').value)
   
    

    let user = {
        usuarios: Newusuario,
        contras: Newcontra
    }
    
    users.push(user);
    
    document.getElementById("formulario").reset();

    alert("registrado correctamente")
    
    displayUsers();
}

//muestra usuarios(solo esta en el registro)
function displayUsers(){
    const userList = document.getElementById("userList");

    userList.innerHTML = "";

    users.forEach(user => {
        const listItem = document.createElement("li");
        listItem.textContent = `Nombre de Usuario: ${user.usuarios}, Contraseña: ${user.contras}`;
        userList.appendChild(listItem);
    });
}
//boton circular
const botonToggleMenu = document.querySelector('.boton-toggle-menu');
const menuLateral = document.querySelector('.menu-lateral');
const cerrarMenu = document.querySelector('.cerrar-menu');

botonToggleMenu.addEventListener('click', function() {
  menuLateral.style.right = '0';
  document.getElementById('boton-toggle-menu').style.display = 'none';
});

cerrarMenu.addEventListener('click', function() {
  menuLateral.style.right = '-250px';
  document.getElementById('boton-toggle-menu').style.display = 'block';
});
