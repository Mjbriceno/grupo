var muestraFoto = document.getElementById("visor");

document.getElementById("boton-miriam").addEventListener("click",function(){
    muestraFoto.src ="/images/miriam.jpg";
});

document.getElementById("boton-martin").addEventListener("click",function(){
    muestraFoto.src ="/images/martin.jpeg";
});

/************ */
let bOscuro = document.getElementById("boton-oscuro");
let bClaro = document.getElementById("boton-claro");
let brecha = document.getElementById("brecha");

bOscuro.addEventListener("click", function(){ 
    brecha.style.backgroundColor = "#000000";
    brecha.style.color = "#FFFFFF";

});

bClaro.addEventListener("click", function(){ 
    brecha.style.backgroundColor = "#F25922";
    brecha.style.color = "#333333";

});

/**************** Arreglos sesion7 */

let frases = [];
frases[0] = "Detente hasta que te sientas orgullosa de ti misma";
frases[1] = "Detrás de una mujer poderosa se encuentra ella misma luchando a diario";
frases[2] = "Detrás de cada gran mujer, existe una historia que la convirtió en guerrera";
frases[3] = "Una mujer segura de sí misma no tiene miedo de vivir sola, tiene miedo de vivir mal acompañada";

let botonFrase1 = document.getElementById("frase1");
let botonFrase2 = document.getElementById("frase2");
let botonFrase3 = document.getElementById("frase3");
let botonFrase4 = document.getElementById("frase4");
let fraseDia = document.getElementById("frase-dia");

botonFrase1.addEventListener("click", function() {
    fraseDia.innerHTML = frases[0];

})

botonFrase2.addEventListener("click", function() {
    fraseDia.innerHTML = frases[1];

})

botonFrase3.addEventListener("click", function() {
    fraseDia.innerHTML = frases[2];

})

botonFrase4.addEventListener("click", function() {
    fraseDia.innerHTML = frases[3];

})


// generacion de numetos aleatorios o al azar */ 
//console.log(Math.floor(Math.random()*3));
//let aleatorio = Math.floor(Math.random()*3);

//frasedia.innerHTML = frases[aleatorio];

let nombrePersonaje = document.getElementById("nombre-personaje");
let personajes = [];
personajes[0] = "Ada Lovelace";
personajes[1] = "Marie Curie";
personajes[2] = "Lise Meitner";
personajes[3] = "Cecilia Payne-Gaposchkin";
personajes[4] = "Rachel Louis Carson";

let aleatorio = Math.floor(Math.random() * 5 )

nombrePersonaje.innerHTML = personajes[aleatorio];

/*************** */


//GALERIA con botones sesion8

let paisajes = [];
paisajes [0] = "images/mujerdoctor.jpg";
paisajes [1] = "images/mujeringeniera.jpg";
paisajes [2] = "images/mujermaestra.jpg"; //Ruta Relativa "images/desierto.jpg"
paisajes [3] = "images/mujerquimica.jpg";
paisajes [4] = "images/mujertec.jpg";

let muestra = document.getElementById("muestra");
let bAvanzar = document.getElementById("boton-avanzar");
let bRetroceder = document.getElementById("boton-retroceder");
let cajaP = document.getElementById("caja-posicion");
let posicion = 0;

actualizarImagen();

function actualizarImagen(){
    cajaP.innerHTML = posicion + 1;
    muestra.src = paisajes[posicion];
}

bAvanzar.addEventListener("click", function(){
    posicion++; //Incrementa el valor de la variable en uno
    if (posicion === 5){
        posicion = 0
    }
    actualizarImagen(); // linea 139 de html
    })

    //****************** */

    bRetroceder.addEventListener("click", function(){
        posicion--;
        if (posicion === -1){
            posicion = 4;
        }
        actualizarImagen();//Disminuye el valor de la variable en uno
     })

     function avanzar(){
        posicion++; //Incrementa el valor de la variable en uno
        if (posicion === 5){
            posicion = 0
        }
        muestra.src = paisajes[posicion]; // linea 105 de html
        }
        //setInterval(avanzar, 1000); 

//API FETCH para cargar paginas
let iSteam = document.getElementById("menu-item-steam");
let iIntegra = document.getElementById("menu-item-integra");
let mContent = document.getElementById("main-content");

iSteam.addEventListener("click", function(){
    fetch('steam.html')
    .then(Response => Response.text())
    .then(data => {
        mContent.innerHTML = data;
    });
})

iIntegra.addEventListener("click", function(){
    fetch('integrantes.html')
    .then(Response => Response.text())
    .then(data => {
        mContent.innerHTML = data;
    });
})