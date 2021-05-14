function apagarlabel(){
    var estadoActivado = document.getElementById('activador').checked;

    if (estadoActivado == true) {

        document.getElementById('inputUsuario').disabled = true;
        document.getElementById('inputName').disabled = true;
        document.getElementById('inputEmail').disabled = true;
        document.getElementById('inputPassword').disabled = true;
        document.getElementById('inputCiudad').disabled = true;
        document.getElementById('inputEstado').disabled = true;
        document.getElementById('inputMunicipio').disabled = true;
        document.getElementById('inputCalle').disabled = true;
        document.getElementById('inputZip').disabled = true;
        document.getElementById('btn-registrar').disabled = true;




    }else{

           document.getElementById('inputUsuario').disabled = false;
        document.getElementById('inputName').disabled = false;
        document.getElementById('inputEmail').disabled = false;
        document.getElementById('inputPassword').disabled = false;
        document.getElementById('inputCiudad').disabled = false;
        document.getElementById('inputEstado').disabled = false;
        document.getElementById('inputMunicipio').disabled = false;
        document.getElementById('inputCalle').disabled = false;
        document.getElementById('inputZip').disabled = false;
        document.getElementById('btn-registrar').disabled = false;
    }

}



let vender = document.getElementById('activador');
vender.addEventListener('change', apagarlabel);

