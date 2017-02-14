$(document).ready(function(){
  var clicks = 0;
  var canClick = true;

  $('.heart').click(function(){

    clicks++;

    if(canClick){
      if(clicks > 10 && clicks <= 15){
        $('.fa').attr('class', 'fa fa-heart fa-2x');
      } else if(clicks > 15 && clicks <= 20){
        $('.fa').attr('class', 'fa fa-heart fa-3x');
      } else if(clicks > 20 && clicks <= 30){
        $('.fa').attr('class', 'fa fa-heart fa-4x');
      } else if(clicks > 30){
        $('.cont').fadeOut(function(){
          $('.container').html('<div class="letter"> <p>Otro año mas en el que te tomo de la mano.</p> <p>Otro año mas en que la relacion, como nosotros, muta y evoluciona.</p> <p>Hemos aprendido a complementarnos y a medida que el tiempo pasa, la relacion se hace -y nos hace- mas fuertes.</p><p>Todo ese universo de amor, con el caos que lo acompaña, que hemos creado juntos, se concentra en su nucleo, donde estamos tu y yo, tomados de la mano y lo vemos pasar mientras pasamos por el.</p> <i class="fa fa-heart fa-1x" aria-hidden="true"></i> <p>!Te amo!</p> <p> ¡Gracias por ser una vez mas mi valentin! </p></div>').fadeIn();
        });

      }
    }

    console.log(clicks);
  });

});
