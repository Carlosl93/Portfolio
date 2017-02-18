

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
  acos: [
    {
      nombre: 'Yaz',
      votos: 23,
      link: 'link'
    },
    {
      nombre: 'Yasmin',
      votos: 21,
      link: 'link'
    },
    {
      nombre: 'Melodene',
      votos: 2,
      link: 'link'
    }
  ],
  hipogliceminantes: [
    {
      nombre: 'Metformina',
      votos: 12,
      link: 'link'
    },
    {
      nombre: 'Glibenclamida',
      votos: 4,
      link: 'link'
    },
    {
      nombre: 'Glimepidina',
      votos: 1,
      link: 'link'
    }
  ],
  esteroides: [
    {
      nombre: 'Betametasona',
      votos: 12,
      link: 'link'
    },
    {
      nombre: 'Dexametasona',
      votos: 8,
      link: 'link'
    },
    {
      nombre: 'Prednisona',
      votos: 2,
      link: 'link'
    }
  ],
  antihipertensivos: [
    {
      nombre: 'Captopril',
      votos: 32,
      link: 'link'
    },
    {
      nombre: 'Enalapril',
      votos: 12,
      link: 'link'
    },
    {
      nombre: 'Nifedipina',
      votos: 9,
      link: 'link'
    }
  ],
  antiretrovirales: [
    {
      nombre: 'Zidovudina',
      votos: 24,
      link: 'link'
    },
    {
      nombre: 'Abacavir',
      votos: 18,
      link: 'link'
    },
    {
      nombre: 'Raltegravir',
      votos: 9,
      link: 'link'
    }
  ],
  antibioticos: [
    {
      nombre: 'Amoxiclina',
      votos: 45,
      link: 'link'
    },
    {
      nombre: 'Clavulanico',
      votos: 34,
      link: 'link'
    },
    {
      nombre: 'Cefadroxilo',
      votos: 28,
      link: 'link'
    }
  ],
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
