document.addEventListener('DOMContentLoaded', function(){
    function ocultar(id) {
    let elP = document.getElementById(id);
    if (elP.style.display === "none") {
        elP.style.display = "block";
    } else {
        elP.style.display = "none";
    }
    
}

document.getElementById('boton_flecha').addEventListener('click',function(){ocultar('datospersonalesdiv')} );
document.getElementById('boton_flecha2').addEventListener('click',function(){ocultar('estudiosdiv')} );
document.getElementById('boton_flecha3').addEventListener('click',function(){ ocultar('experienciadiv')});
document.getElementById('boton_flecha4').addEventListener('click',function(){ocultar('habilidadesdiv')});

}, false);

