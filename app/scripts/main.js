'use strict';


// Helper functions
//
var $ = function(selector){
  return Array.prototype.slice.call(document.querySelectorAll(selector));
};
var previous = function(el){
  var sista = el.previousSibling;
  while(sista.nodeType !== 1){
    sista = sista.previousSibling;
  }
  return sista;
};
var remove = function(el){
  if (el.parentNode) {
    el.parentNode.removeChild(el);
  }
};


// Expander behavior
//
var expand = function(e){
  e.preventDefault();
  var $aside = previous(this);
  $aside.classList.remove('collapsed');
  $aside.classList.add('opened');
  remove(this);
};


// Time elapsed in current job
//
var calculateElapsed = function(startDate){
  var miliInAMonthAverage = 2629741666;

  var currentJobStartDate = new Date(startDate).getTime();
  var today = new Date().getTime();
  var elapsed = today - currentJobStartDate;

  var elapsedMonthsTotal = Math.floor(elapsed / miliInAMonthAverage);
  var elapsedYears = Math.floor(elapsedMonthsTotal / 12);
  var elapsedMonths = elapsedMonthsTotal % 12;

  var dateToString = function(date, string){
    return date ? date + ' ' + string + (date > 1 ? 's' : '') : '';
  };

  return dateToString(elapsedYears, 'year') + ' ' + dateToString(elapsedMonths, 'month');
};


// Wait for DOM load
//
document.addEventListener('DOMContentLoaded', function() {

  // Initial vars
  var $asides = $('section aside');
  var $elapsed = $('#elapsed');
  var expander = document.createElement('a');
  var expanderText = document.createTextNode('Read More');
  expander.appendChild(expanderText);
  expander.setAttribute('href', '#');
  expander.setAttribute('class', 'expander');


  // Add expander after each Aside
  $asides.forEach(function(el){
    el.classList.add('collapsed');
    var $expander = expander.cloneNode(true);
    $expander.addEventListener('click', expand);
    el.parentNode.appendChild($expander);
  });

  // Inject elapsed time string
  if($elapsed.length){
    $elapsed[0].textContent = calculateElapsed($elapsed[0].getAttribute('data-started'));
  }

});
