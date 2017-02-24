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
var canClickMedicamento = true;

$(document).ready(function(){
    $('.atributo').click(function(){
      $(this).parent().find('.descripcionText').toggle("fast");
      changeIcon(this);
    });

    $('.nacional').click(function(){
      $('main').html(`
      <section>
        <div class="estado">
          <p class="descripcion">Miranda</p>
          <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
        </div>

        <div class="commentsSec">
          <div class="commentText">
            <p class="user">Claudio</p>
            <p class="date">21/02</p>
            <p class="push">+12</p>
            <div class="comment">
              <p> En el Farmatodo de las Mercedes quedan 20 cajas!</p>
            </div>
          </div>

          <div class="responseText">
            <p class="user">Antonio</p>
            <p class="date">21/02</p>
            <p class="push">+2</p>
            <div class="comment">
              <p> Pase hace unos minutos y ya no habían más</p>
            </div>
          </div>
        </div>

      </section>

      <section class="atributo">
        <p class="descripcion">Vargas</p>
        <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
      </section>

      <section class="atributo">
        <p class="descripcion">Nueva Esparta</p>
        <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
      </section>

      <section class="atributo">
        <p class="descripcion">Zulia</p>
        <i class="fa fa-angle-down fa-2x" aria-hidden="true"></i>
      </section>`);
    });

    $('.internacional').click(function(){
      $('main').html(`
        <p class="alerta">¡Aviso!</p>
        <section class="donacion">
          <p>
            El usuario <span>Alberto</span> ha dado un donativo de <span>30 unidades</span>.
          </p>
          <p> <span>Haz click aqui para reclamar una unidad</span> </p>
        </section>
        `);
    });

    $(document).on('click', '.estado', function(){
      $(this).parent().find('.commentsSec').toggle("fast");
      changeIcon(this);
    });
});
