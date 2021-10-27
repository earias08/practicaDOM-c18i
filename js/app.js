function cambiarTitulo(){
    console.log('aqui estoy dentro de la funcion cambiarTitulo');
    // traer al titulo o h1
    let tituloH1 = document.querySelector('#titulo');
    console.log(tituloH1);
    tituloH1.innerHTML = 'Titulo modificado';
    tituloH1.className = 'display-4 text-warning'
}