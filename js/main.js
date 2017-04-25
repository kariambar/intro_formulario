

function translate(){
    var title = document.getElementById("form-signin-heading");
    var email = document.getElementById("inputEmail");
    var password = document.getElementById("inputPassword");
    var remenber = document.getElementsByTagName("span")[0];
    var button = document.getElementsByClassName("btn")[0];
    title.innerHTML = "Por favor inicia sesión";
    email.placeholder = "Correo Electrónico";
    password.placeholder = "Contraseña";
    remenber.innerHTML = "Recordar datos";
    button.innerHTML = "Iniciar Sesión";
}
translate();

//traer el elemento email byid

function resultado(){

	var titu = document.getElementById("hola");
 	titu.innerHTML = "Datos del usuario"	
	var  correo = document.getElementById("inputEmail").value;
 	var contrasena = document.getElementById("inputPassword").value;
 	var div = document.getElementById("emailOk");
 	div.innerHTML = "El correo ingresado es : " + "<br>" + correo + "<br>";
 	var div2 = document.getElementById("contrasenaOk");
 	div2.innerHTML = "La clave ingresa es : " + "<br>" + contrasena; 
}

	