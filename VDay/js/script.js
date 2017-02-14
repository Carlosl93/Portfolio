$(document).ready(function(){
  var clicks = 160;
  var canClick = true;

  $('.heart').click(function(){

    clicks++;

    if(canClick){
      if(clicks > 20 && clicks <= 50){
        $('.fa').attr('class', 'fa fa-heart fa-2x');
      } else if(clicks > 50 && clicks <= 80){
        $('.fa').attr('class', 'fa fa-heart fa-3x');
      } else if(clicks > 80 && clicks <= 140){
        $('.fa').attr('class', 'fa fa-heart fa-4x');
      } else if(clicks > 180 && clicks <= 200){
        $('.cont').fadeOut(function(){
          $('.container').html('<div class="letter"> <p>Otro año mas en el que te tomo de la mano.</p> <p>Otro año mas en el que la relacion evoluciona, va mutando y formandose a medida que ambos cambiamos, va creciendo y haciendose mas solida a medida que el tiempo pasa.</p> <p>Pero es alli en el centro de este caos, en el nucleo de nuestro amor, que se encuentran dos personas agarradas de la mano fuertemente.</p> <i class="fa fa-heart fa-1x" aria-hidden="true"></i> <p>!Te amo!</p> <p> ¡Gracias por ser una vez mas mi valentin! </p></div>').fadeIn();
        });

      }
    }

    console.log(clicks);
  });

});
