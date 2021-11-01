function cambiarTitulo(){
    console.log('aqui estoy dentro de la funcion cambiarTitulo');
    // traer al titulo o h1
    // let tituloH1 = document.querySelector('#titulo');
    // otra forma de traer h1
    let tituloH1 = document.getElementById('titulo');
    console.log(tituloH1);
    tituloH1.innerHTML = 'Titulo modificado';
    tituloH1.className = 'display-4 text-warning'
}

function verMas(){
    console.log('desde la funcion ver mas');
    // buscar el elemento padre
    let contenedorPadre = document.querySelector('#articulo');
    console.log(contenedorPadre)
    let btnVerMas = document.querySelector('#btnVerMas');

    if(btnVerMas.innerHTML == 'Ver mas'){
        // opcion 1 - camino corto
        // contenedorPadre.innerHTML += `<p class="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore, quia aperiam quas unde eius sequi, quod consequuntur voluptate dolor quam dolore quo aut repellat sunt ea! Debitis, accusamus deleniti corporis at consequatur nisi, aliquid ducimus nesciunt dolorum fuga laborum eos tenetur cumque sint deserunt distinctio hic maiores odit officiis nobis, rem animi quaerat eius expedita! Dolor natus laboriosam libero.</p>`;
        // opcion 2 - camino largo
        // 1- crear el elemento
        let parrafo = document.createElement('p');
        //2- trabar el elemento creado
        parrafo.innerHTML = 'aqui agrego todo el parrafo de prueba';
        parrafo.className = 'lead';
        // 3- insertar el elemento en el maquetado
        contenedorPadre.appendChild(parrafo);
        btnVerMas.innerHTML = 'Ocultar';
        btnVerMas.className = 'btn btn-danger';
    }else{
        console.log('quiero ocultar el parrafo');
        // borrar o eliminar el parrafo del DOM
        console.log(contenedorPadre.hasChildNodes()); //devuelve un true o false
        console.log(contenedorPadre.children); //obtenemos un arreglo con los nodos hijos
        if(contenedorPadre.hasChildNodes() && contenedorPadre.children.length == 2){
            // aqui digo q quiero remover un nodo
            contenedorPadre.removeChild( contenedorPadre.children[1]);
            // cambiar el texto del boton denuevo a ver mas
            btnVerMas.innerHTML = 'Ver mas';
            btnVerMas.className = 'btn btn-primary';
        }
    }
}

// la propiedad para acceder al texto de un input es value no innerHTML