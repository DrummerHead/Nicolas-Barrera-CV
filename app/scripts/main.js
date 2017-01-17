(function(window, document) {
  'use strict';

  // Helper functions
  //
  var $ = function(selector) {
    return Array.prototype.slice.call(document.querySelectorAll(selector));
  };

  // Time elapsed in current job
  //
  var calculateElapsed = function(startDate) {
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


  var getTotalHeight = function(CSSSD) {
    return ['paddingBottom', 'height', 'paddingTop'].map(function(prop) {
      return parseFloat(CSSSD[prop]);
    }).reduce(function(prev, curr) {
      return prev + curr;
    }, 0);
  };

  var sizeLeftCol = function(leftColCSSSDs, sections) {
    if (window.innerWidth >= 1240) { // app/styles/_variables.scss > $charlie
      var leftColHeight = leftColCSSSDs.map(function(CSSSD) {
        return getTotalHeight(CSSSD);
      }).reduce(function(prev, curr) {
        return prev + curr;
      }, 0);

      sections.style.height = (Math.ceil(leftColHeight) + 10) + 'px';
    } else {
      sections.style.height = null;
    }
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

    var leftColCSSSDs = ['skills', 'work-examples', 'talks'].map(function(id) {
      return window.getComputedStyle(document.getElementById(id));
    });

    var sections = document.querySelector('.sections');

    sizeLeftCol(leftColCSSSDs, sections);

    window.addEventListener('load', function() {
      sizeLeftCol(leftColCSSSDs, sections);
    });

    window.addEventListener('resize', function() {
      sizeLeftCol(leftColCSSSDs, sections);
    });

  });

})(window, document);
