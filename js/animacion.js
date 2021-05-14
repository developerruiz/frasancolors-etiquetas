function validar(){
    var usuario, nombre, email, password, ciudad, estado, municipio, calle, cp;
    usuario = document.getElementById("inputUsuario").value;
    nombre = document.getElementById("inputName").value;
    email = document.getElementById("inputEmail").value;
    password = document.getElementById("inputPassword").value;
    ciudad = document.getElementById("inputCiudad").value;
    estado = document.getElementById("inputEstado").value;
    municipio = document.getElementById("inputMunicipio").value;
    calle = document.getElementById("inputCalle").value;
    cp = document.getElementById("inputZip").value;
    rfc = document.getElementById("rfcPro").value;
    razonsocial = document.getElementById("razonsocialPro").value;
    email_pro = document.getElementById("emailPro").value;

    if (usuario == ""|| nombre== "" || email =="" || password=="" || ciudad =="" || ciudad=="" || estado==""|| municipio==""|| calle==""|| cp=="") {
        alert("Todos los campos son requeridos");
        return false;
    }
    else if (usuario.length>12) {
        alert("El nombre es muy largo");
    }
    else if (nombre.length>100) {
        alert("El nombre es muy largo");
    }
    else if (email.length>50) {
        alert("El nombre Usuario es muy largo");
    }
    else if (password.length>12) {
        alert("contraseña muy larga (15 caracteres)");
    }
    else if (ciudad.length>50) {
        alert("El nombre de la ciudad es muy largo");
    }
    else if (estado.length>50) {
        alert("El nombre del estado es muy largo");
    }
    else if (municipio.length>30) {
        alert("El nombre del municipio es muy largo");
    }
    else if (calle.length>100) {
        alert("El nombre de la calle es muy largo");
    }
    else if (cp.length>5) {
        alert("Código postal solo 5 caracteres");
    }
    
}


