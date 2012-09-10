Zepto(function($){



// Initial vars
var asides = $('section aside');
var $expander = "<a href='#' class='expander'>Read More</a>";


// Adding elements to aside
asides.each(function(){
  var me = $(this);
  me.addClass('collapsed');
  me.after($expander);
});


// Append behaviour to .expander trigger
$('section').on('click', '.expander', function(e){
  e.preventDefault();
  var me = $(this);
  console.log(me);
  me.prev().removeClass('collapsed').addClass('opened');
  me.remove();
});












})
