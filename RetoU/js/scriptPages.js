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
});
