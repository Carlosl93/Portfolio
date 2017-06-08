let isShow = false;

$(document).ready(() => {
  // Click on projectBox
  var click = document.getElementsByClassName('projectBox');
  $('.projectBox').css('cursor','pointer');
  $('').onclick = function () {}
  $(document).on('click', '.projectBox', (e) => {

    e.preventDefault();

    $(e.target).toggleClass('projectBoxActive');

    if($(e.target).attr('data-isshow') == 'true'){
      $(e.target).children().toggle();
      $(e.target).attr('data-isshow', 'false');
    } else {
      $(e.target).one('transitionend', (e) => { $(e.target).children().toggle(); });
      $(e.target).attr('data-isshow', 'true');
    }

  });
  click.onclick = function () {}
  /*
  $('.projectBox').click( (e) => {


  });
  */
});
