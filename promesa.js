
    const button = document.querySelector (".btn");
    const parrafo = document.querySelector (".mensaje");
button.addEventListener("click", function(){
    parrafo.textContent = "Los datos fueron cargados exitosamente";
    const promesa = new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve("Los datos fueron cargados exitosamente");
        },3000);
});
promesa
    .then((resultado)=>{console.log(resultado);})
    .catch ((error)=> {console.log(error);});
let posibilidad = (Math.random()<0.5)
if (posibilidad == parrafo){
    alert("Fin")
}
else{
    alert("Error al cargar datos") //el problema q tuve con esta alerta es que se muestra al mismo tiempo que el texto
}

    });
