//evita que hagan clic derecho en la página
document.oncontextmenu = function(){
    return false;
}


// evita ver el código fuente con cotrl+u  y  con f12
document.onkeydown = function(){
    return false;
}