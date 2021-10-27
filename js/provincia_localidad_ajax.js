$(document).ready(function(){
    let provincia = $('#procincia');
    obtenerLocalidades(provincia.val());
    provincia.change(function(){
        obtenerLocalidades(provincia.val());
    })

})

function obtenerLocalidades(dato){
    $.ajax({
        type: 'GET',
        data:{id: dato},
        url: 'http://prueba.prueba',
        async: true,
        beforeSend: function () {
            $('#localidades').text('Cargando');
          },
          success: function (data) {
            $('#localidades').html(data);
          },
          error: function () {
            $('#localidades').text('No se ha podido obtener la información');
          },
    })
}