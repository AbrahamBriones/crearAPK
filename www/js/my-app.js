// Initialize app
var myApp = new Framework7();

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;
// Funcion que permite definir el archivo raiz del proyecto y navegar por diferentes rutas que
// sean establecidas
var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Se agregan las distintas rutas de archivos html externos
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
      {
        path: '/inicio/',
        url: 'inicio.html',
      },
      {
        path: '/notas/',
        url: 'notas.html',
      },
      {
        path: '/actividades/',
        url: 'actividades.html',
      },{
        path: '/horario/',
        url: 'horario.html',
      },{
        path: '/anotaciones/',
        url: 'anotaciones.html',
      },{
        path: '/inasistencias/',
        url: 'inasistencias.html',
      },{
        path: '/avisos/',
        url: 'avisos.html',
      },
    ]
    // ... other parameters
  });
//Función que carga una vista principal en el html raiz definido previamente
var mainView = app.views.create('.view-main');

// Handle Cordova Device Ready Event
//Funcion que detecta cuando se inicia el proyecto en phonegap
$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});
// Funcion que detecta cuando se inicia y carga una página
// Option 1. Using one 'page:init' handler for all pages
$$(document).on('page:init', function (e) {
    // Do something here when page loaded and initialized
    console.log(e);
})

function enviarLogin(){
  console.log("paso por login");
  navigator.vibrate(800);
  var frut= document.getElementById("rut").value;
  var fpass= document.getElementById("pass").value;

  console.log(frut);
  console.log(fpass);
  document.getElementById("rut").value="";
  document.getElementById("pass").value="";

  $.ajax({
      type:"POST",
      url: "http://localhost/sosappweb/login",
      data: ({rut: frut, pass: fpass}),
      cache: false,
      dataType: "text",
      

      success:  function(data){
          alert(data);
          
         var mensaje= data; 
       
         console.log(mensaje);
           if(mensaje == "Ha iniciado sesión"){
            app.router.navigate("/inicio/");
          }
  
      }
  });
  
};