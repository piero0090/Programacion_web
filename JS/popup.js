var btnCambiarNombre = document.getElementById('btn-cambiar-nombre'),
    overlay =document.getElementById('overlay'),
    popup= document.getElementById('popup'),
    btnAceptarnombre = document.getElementById('btn-aceptar'),
    btnCerrarPopup = document.getElementById('btn-cerrar-popup');

var animal =
    [  "cabra", "iguana", "koala", "lémur", "cocodrilo", 
       "oso", "dinosaurio", "delfines", "pato", "elefante", 
       "hurón", "zorro", "rana", "jirafa", "erizo", "hipopótamo", "hiena",
       "chacal", "leopardo", "tigre", "llama", "manatí", "visón", "mono", 
       "orangután", "nutria", "panda" , "pingüino", "armadillo", "axolote", 
       "tejón", "murciélago", "castor", "búfalo", "camello", "camaleón", 
       "guepardo", "ardilla", "chinchilla", "chupacabras", "cormorán",
       "coyote", "cuervo", "dingo", "ornitorrinco", "pitón", "conejo", 
       "mapache", "rinoceronte", "oveja", "musaraña", "mofeta", "ardilla", 
       "tortuga", "morsa", "lobo", "taltuza"];

var modalInicio;
var v = document.getElementsByTagName("audio")[0];
var sound = false;
var boton = document.getElementById("boton");
var musicaB=document.querySelector("#spanMusica");
var SideBar=document.getElementById("sidebar-container");

var name;

function HideSideBar() {
    var element = document.getElementById("content-wrapper");
    element.classList.toggle("toggled");
  }

//Sonido  
function SoundBoton(){
    if (!sound) {
        v.play();
        musicaB.setAttribute("class","fas fa-volume-mute me-2");  //cambiarle la clase a Buton musica fontawesome
        sound = true;
    } else {
        v.pause();
        musicaB.setAttribute("class","fas fa-music me-2");
        sound = false;
        }
}

//Cambiar nombre
function Cambiarnombre(){
    overlay.classList.add('active');
    popup.classList.add('active');
    numapuestas.push(num_apuesta);
    localStorage.setItem("Numapuesta",numapuestas);//LOCAL
    monedas=200;
    gacum.push(ganancia_acumulada);
    localStorage.setItem("Gacum",gacum);
    ganancia_acumulada=0;
    console.log("GANANCIA: "+ganancia_acumulada);
 }

 //Cerrar PopUp
function CerrarPopUp(){
    overlay.classList.remove('active');
    popup.classList.remove('active')
}

//Boton Aceptar nombre
function AceptarNombre(){
    const money=document.querySelector("#monedas");
    const ganancy=document.querySelector('#ganancia');
    overlay.classList.remove('active');
    popup.classList.remove('active');
    money.innerHTML=200;
    ganancy.innerHTML=0;
}

function getData(){
    var name=document.getElementById("name").value;
    console.log(name);
    document.getElementById("name_jugador").innerHTML=name;
    names.push(name);
    localStorage.setItem("Names",names);  //LOCAL
    num_apuesta=0;  
    return name;
}


function getName(){
    var randomName = animal[Math.floor(Math.random() * animal.length)]+' anonimo';
    let input = document.getElementById("name");
    input.value = randomName;
}


const main=()=>{
    
    const Bmenu=document.getElementById("menu-toggle");
    Bmenu.addEventListener('click',HideSideBar);
    //Sonido de boton
    boton.addEventListener('click',SoundBoton);
    btnCerrarPopup.addEventListener('click',CerrarPopUp);
    btnCambiarNombre.addEventListener('click',Cambiarnombre);
    btnCambiarNombre.addEventListener('click',llenarTabla);
    btnAceptarnombre.addEventListener('click',AceptarNombre);
    btnAceptarnombre.addEventListener('click',getData);

    getName();
    llenarTabla();
}
window.addEventListener('load',main);