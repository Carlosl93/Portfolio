
//Variables
var canClickMedicamento = true;
var medicamentos = {
  aines: [
    {
      nombre: 'Acetaminofen',
      votos: 100,
      link: 'pages/atamel.html',
      push: true
    },
    {
      nombre: 'Ibuprofeno',
      votos: 82,
      link: 'pages/ibuprofeno.html',
      push: true
    },
    {
      nombre: 'Naproxeno',
      votos: 69,
      link: 'pages/naproxeno.html',
      push: true
    }
  ],
  acos: [
    {
      nombre: 'Yaz',
      votos: 23,
      link: 'pages/yaz.html',
      push: true
    },
    {
      nombre: 'Yasmin',
      votos: 21,
      link: 'pages/yasmin.html',
      push: true
    },
    {
      nombre: 'Melodene',
      votos: 2,
      link: 'pages/melodene.html',
      push: true
    }
  ],
  hipogliceminantes: [
    {
      nombre: 'Metformina',
      votos: 12,
      link: 'pages/metformina.html',
      push: true
    },
    {
      nombre: 'Glibenclamida',
      votos: 4,
      link: 'pages/glibenclamida.html',
      push: true
    },
    {
      nombre: 'Glimepidina',
      votos: 1,
      link: 'pages/glimepirida.html',
      push: true
    }
  ],
  esteroides: [
    {
      nombre: 'Betametasona',
      votos: 12,
      link: 'pages/betametasona.html',
      push: true
    },
    {
      nombre: 'Dexametasona',
      votos: 8,
      link: 'pages/dexametasona.html',
      push: true
    },
    {
      nombre: 'Prednisona',
      votos: 2,
      link: 'pages/prednisona.html',
      push: true
    }
  ],
  antihipertensivos: [
    {
      nombre: 'Captopril',
      votos: 32,
      link: 'pages/captopril.html',
      push: true
    },
    {
      nombre: 'Enalapril',
      votos: 12,
      link: 'pages/enalapril.html',
      push: true
    },
    {
      nombre: 'Nifedipina',
      votos: 9,
      link: 'pages/nifedipina.html',
      push: true
    }
  ],
  antiretrovirales: [
    {
      nombre: 'Zidovudina',
      votos: 24,
      link: 'pages/zidovudina.html',
      push: true
    },
    {
      nombre: 'Abacavir',
      votos: 18,
      link: 'pages/abacavir.html',
      push: true
    },
    {
      nombre: 'Raltegravir',
      votos: 9,
      link: 'pages/raltegravir.html',
      push: true
    }
  ],
  antibioticos: [
    {
      nombre: 'Amoxicilina',
      votos: 45,
      link: 'pages/amoxiclina.html',
      push: true
    },
    {
      nombre: 'Clavulanico',
      votos: 34,
      link: 'pages/clavulanico.html',
      push: true
    },
    {
      nombre: 'Cefadroxilo',
      votos: 28,
      link: 'pages/cefadroxilo.html',
      push: true
    }
  ],
};
var secc = "";

//Funciones
function changeIcon(e){

  if($(e).find('i').hasClass('fa-angle-down')){

    if(canClickMedicamento){
      $(e).find('i').removeClass('fa-angle-down');
      $(e).find('i').addClass('fa-angle-up');
    } else {
      $('section').find('i').removeClass('fa-angle-up');
      $('section').find('i').addClass('fa-angle-down');
    }

  } else {
    $(e).find('i').removeClass('fa-angle-up');
    $(e).find('i').addClass('fa-angle-down');
  }

}
function addMedicamento(e){
  if(canClickMedicamento){

    var nom = $(e).find('p').html().toLowerCase();
    var nom2 = medicamentos[nom];

    secc = nom;

    for(var i = nom2.length-1; i >= 0; i--){
      var emp = (nom2[i].push == true) ? '¡Empuja!' : '-';
      $(e).after('<div class="medicamento" style="display:none"><div class="atributo"><p class="nombreM" data-index="'+i+'">'+nom2[i].nombre+'</p><p class="votos">+'+nom2[i].votos+'</p><i class="fa fa-angle-down fa-1x" aria-hidden="true"></i></div><div class="atributob"><a href="'+nom2[i].link+'" class="consigue">¡Consigue!</a><a href="#" class="empuja">'+ emp +'</a></div></div>');
    }
    $('.medicamento').toggle('fast');
    canClickMedicamento = false;
  } else {

    $('.medicamento').toggle('fast', function(){
      $(this).remove();
    })

    canClickMedicamento = true;
  }
}

$(document).ready(function(){

  //Botones de cada seccion de medicamento
  $('section').click(function(){
    //Change the icon
    changeIcon(this);
    //Add the content
    addMedicamento(this);
  });

  //Boton de cada medicamento
  $(document).on('click', '.medicamento', function(){
    $(this).find('.atributob').toggle('fast');
  });

  //Empuje
  $(document).on('click', '.empuja', function(){
    //var nom = $(this).parent().parent().find('.nombreM').html().toLowerCase();
    var ind = $(this).parent().parent().find('.nombreM').data('index')
    var nom2 = medicamentos[secc];

    if(nom2[ind].push == true){
      var voto = nom2[ind].votos + 1;

      for(var i = 0; i < nom2.length; i++){
        nom2[i].push = false;
      }
      nom2[ind].votos = voto;
      $(this).parent().parent().find('.votos').html('+'+voto);
      $('.empuja').html('-').removeClass('empuja');
    }
  });

});
