(function(window, document){
  'use strict';

  // Helper functions
  //
  var $ = function(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
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
    var $elapsed = $('#elapsed');

    // Inject elapsed time string
    if($elapsed.length){
      $elapsed[0].textContent = calculateElapsed($elapsed[0].getAttribute('data-started'));
    }
  });

})(window, document);
