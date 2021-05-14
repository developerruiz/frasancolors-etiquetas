// objeto con propiedads


var propMenu ={

    burger_menu: document.getElementById('burger_menu'),
    menu_lateral: document.getElementById('menu_lateral'),
    menu_slide: document.getElementById('menu_slide'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#menu_slide menu-lateral lista-menu-slide li'),
    boton_cerrar: document.getElementById('btn_cerrar')
 
}
// objeto con metodos
var metMenu = {

    inicio: function (){
        propMenu.burger_menu.addEventListener('click', metMenu.toggleMenu);
        propMenu.boton_cerrar.addEventListener('click', metMenu.cerrarMenu);
    },

    toggleMenu: function () {
            if (propMenu.menu_activo == false) {

                propMenu.menu_activo = true;
                propMenu.menu_lateral.className = propMenu.menu_lateral.className + ' active';
                propMenu.menu_slide.className = propMenu.menu_slide.className + ' active';
                
            }else{
                propMenu.menu_activo = false;
            }
    },
    cerrarMenu: function(){
        if(propMenu.menu_activo = true){
            propMenu.menu_lateral.className = propMenu.menu_lateral.className.replace('active','');
            propMenu.menu_slide.className = propMenu.menu_slide.className.replace('active','');
        }
    }
}


metMenu.inicio();
