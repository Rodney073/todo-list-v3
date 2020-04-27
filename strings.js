
// My scripts
$(document).ready(function(){
  // let rows = ['Wake up','Do some work','Make slider for demo','Prepare for demo','Rehearse it','Nail ot'];
    let rows = ['Wake up','Do some work'];
  rows.forEach((row) => {
    $('.box').append('<div class="list"><p>'+row+'</p><i id="ok" class="fas fa-thumbs-up"></i><i id="del" class="fas fa-times-circle"></i></div>');
  });
    $('#add').click(() => {
  if ($('#todo').val().length !=0){
        // $('ol').append(`<li><p>${$('#new').val()}<p><p class="del"></p><p class="ok"></p></li>`);
      $('.box').append('<div class="list"><p>'+$('#todo').val()+'</p><i id="ok" class="fas fa-thumbs-up"></i><i id="del" class="fas fa-times-circle"></i></div>');
        $('#todo').val('');
     } else {alert("Empty data!");}
    });
  
  $('.box').on('click', '#del', (event) => {
    $(event.target).parent().remove();
  });

  $('.box').on('click', '#ok', (event) => {
    $(event.target).parent().css('color','#009900');
    $(event.target).removeClass('ok');
    $(event.target).addClass('oki');
  });

  $('.box').on('click', '.oki', (event) => {
    $(event.target).parent().css('color','#B8B8B8');
    $(event.target).removeClass('oki');
    $(event.target).addClass('ok');
  });
});







/**

$('#add').on('click', (event) => {
 
  $('ul').append("<li>" + todo.value +'<p><i class="fas fa-thumbs-up"></i><i class="fas fa-times-circle"></i>' + "</li>")
 
 // $('li').append('<i class="fas fa-thumbs-up"></i>')
  
  
  
}); 

$('.fas fa-thumbs-up').css('color','red');
//$('i').css('color','red');

$('ul').on('click', 'li', (event) => {
  $(event.target).toggleClass('line');
});

$('i').on('click', '.fas fa-thumbs-up', (event) => {
  $(event.target).text('test');
});


/*$('ul').css('margin-left', '150px');
$('ul').css('text-algin', 'left');*/


//$('.innerbox').append('<i class="fas fa-thumbs-up"></i>')*/