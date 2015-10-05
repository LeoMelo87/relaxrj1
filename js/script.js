$(document).ready(function(){
  $('.readmore-content').hide();
  $('.readmore').click(function(){
    $('.readmore-content').show('slow');
    $(this).hide('slow');
  });
});

$(document).ready(function(){
$('.learnmore-content').hide();
  $('.learnmore').click(function(){
    $('.learnmore-content').slideDown(function(){
      $('learnmore-link').hide('slow');
    });

  });
});
