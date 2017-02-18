

var canClick = true;

var medicamentos = {
  aines: [
    {
      nombre: 'Atamel',
      votos: 100,
      link: 'link'
    },
    {
      nombre: 'Ibuprofeno',
      votos: 82,
      link: 'link'
    },
    {
      nombre: 'Naproxeno',
      votos: 69,
      link: 'link'
    }
  ],
  antibioticos: [

  ]
};

console.log(medicamentos['aines'].nombre);


$(document).ready(function(){

  //Botones de section
  $('section').click(function(){

    //Change the icon
    if($(this).find('i').hasClass('fa-angle-down')){
      $(this).find('i').removeClass('fa-angle-down');
      $(this).find('i').addClass('fa-angle-up');
    } else {
      $(this).find('i').removeClass('fa-angle-up');
      $(this).find('i').addClass('fa-angle-down');
    }

    //Add the content
    if(canClick){
      var nom = $(this).find('p').html().toLowerCase();
      var nom2 = medicamentos[nom];
      for(var i = nom2.length-1; i >= 0; i--){
        $(this).after('<div class="medicamento"><div class="atributo"><p>'+nom2[i].nombre+'</p><p>+'+nom2[i].votos+'</p><i class="fa fa-angle-down fa-1x" aria-hidden="true"></i></div></div>');
      }
      canClick = false;
    } else {
      $('.medicamento').remove();
      canClick = true;
    }



  });

});
