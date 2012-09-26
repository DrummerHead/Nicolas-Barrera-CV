Zepto(function($){




// Initial vars
var $asides = $('section aside');
var $expander = "<a href='#' class='expander'>Read More</a>";
var $elapsed = $('#elapsed');


// Collapsing aside
$asides.each(function(){
  var me = $(this);
  me.addClass('collapsed');
  me.after($expander);
});


// Behaviour for .expander trigger
$('section').on('click', '.expander', function(e){
  e.preventDefault();
  var me = $(this);
  me.prev().removeClass('collapsed').addClass('opened');
  me.remove();
});


// Time elapsed in current job
var miliInAMonth = 2629741666;

var currentJobStartDate = new Date(2012, 8, 1).getTime();
var today = new Date().getTime();
var elapsed = today - currentJobStartDate;

var elapsedMonthsTotal = Math.floor(elapsed / miliInAMonth);
var elapsedYears = Math.floor(elapsedMonthsTotal / 12);
var elapsedMonths = elapsedMonthsTotal % 12;

var dateToString = function(date, string){
  var dateString = (date ? date + ' ' + string + (date > 1 ? 's' : '') : '');
  return dateString;
};

var elapsedString = dateToString(elapsedYears, 'year') + ' ' + dateToString(elapsedMonths, 'month');

$elapsed.text(elapsedString);




})
