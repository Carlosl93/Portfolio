
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

  });

});
