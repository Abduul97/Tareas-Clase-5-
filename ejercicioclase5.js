const $botonBienvenida = document.querySelector("#saludar");

$botonBienvenida.onclick = function () {
    const nombre = document.querySelector("#primer-nombre").value;
    const segundoNombre = document.querySelector("#segundo-nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const edad = document.querySelector("#edad").value;
  
    document.querySelector("#informacion-usuario").innerText = `Nombres: ${nombre} ${segundoNombre} 
    Apellido: ${apellido} 
    Edad: ${edad}`;
    document.querySelector("#bienvenido").innerText = `Bienvenido ${nombre}`;

    }
