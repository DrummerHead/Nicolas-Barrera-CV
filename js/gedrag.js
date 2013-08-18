'use strict';


// Helper functions
var $ = function(el){
  return document.body.querySelectorAll(el);
}
var each = function(el, func){
  for(var i = 0; i < el.length; i++){
    var I = el.item(i);
    func(I);
  }
}
var previous = function(el){
  var sista = el.previousSibling;
  while(sista.nodeType !== 1){
    sista = sista.previousSibling;
  }
  return sista;
}
var remove = function(el){
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
}


// Expander behavior
var expand = function(e){
  e.preventDefault();
  var $aside = previous(this);
  $aside.classList.remove('collapsed');
  $aside.classList.add('opened');
  remove(this);
}


// Time elapsed in current job
var miliInAMonth = 2629741666;

var currentJobStartDate = new Date(2005, 12, 1).getTime();
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


// Wait for DOM load
document.addEventListener("DOMContentLoaded", function(event) {

  // Initial vars
  var $asides = $('section aside');
  var $elapsed = $('#elapsed');
  var expander = document.createElement('a');
  var expanderText = document.createTextNode('Read More');
  expander.appendChild(expanderText);
  expander.setAttribute('href', '#');
  expander.setAttribute('class', 'expander');


  // Add expander after each Aside
  each($asides, function(el){
    el.classList.add('collapsed');
    var $expander = expander.cloneNode(true);
    $expander.addEventListener('click', expand);
    el.parentNode.appendChild($expander);
  });


  // Inject elapsed time string
  if($elapsed.length){
    $elapsed[0].textContent = elapsedString;
  }

});
