//Funcion que detecta cuando se inicia y carga el hmtl "avisos"
$$(document).on('page:init', '.page[data-name="avisos"]', function (e) {

        $.getJSON('http://localhost/sosappweb/mostrarAviso',function(data){
          console.log(JSON.stringify(data));
        })
        .done(function(response){
          var html;
      
          $.each(response, function(index, element){
            // console.log(index);
            // console.log(element);
            html = '<div class="card">';
            html += '<div class="list">';
            html += '<div class="item-content">';
            html += '<div class="item-media"><img  class="imagen-profesorAnotacion" src="imagenes/'+element.foto_perfil+'.png"/></div>';
            html += '<div class="item-inner">';
            html += '<div class="item-title">'+element.nombre+'</div>';
            html += '<div class="item-after">'+element.fecha+'</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '<div class="card-content card-content-padding"><p>'+element.asunto+'<br>'+element.contenido+'</p></div>';
            html += '<div class="card-footer"><span class="'+element.asignatura+'">'+element.asignatura+'</span></div>';
            html += '</div>';
            $("q").append(html);
          })
        });                                
      
})
