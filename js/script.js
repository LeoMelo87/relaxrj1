$(document).ready(function(){

  function revealText() {
    event.preventDefault();

    $('#show-this-on-click').slideDown('slow');
    $('.readmore').hide();
    $('.readless').show();
  }
  $('.readmore a').click(revealText)

  function hideText(){
    event.preventDefault();

    $('#show-this-on-click').slideUp('slow');
    $('.readless').hide();
    $('.readmore').show('slow');
  }
  $('.readless a').click(hideText)

  function revealLearn() {
    event.preventDefault();

    $('#learnmoretext').slideDown('slow');
    $('.learnmore').hide();
  }
    $('.learnmore').click(revealLearn)


});
