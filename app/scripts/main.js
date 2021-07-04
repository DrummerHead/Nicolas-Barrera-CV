import calculateElapsed, { elapsedToString } from './calculateElapsed';
import sizeLeftCol from './sizeLeftCol';

const startedWorking = '2007-03-01';

document.addEventListener('DOMContentLoaded', () => {
  const elapsedElem = document.getElementById('elapsed');
  if (elapsedElem) {
    elapsedElem.textContent = elapsedToString(
      calculateElapsed(elapsedElem.getAttribute('data-started'))
    );
  }

  const yearsExpElem = document.getElementById('expYears');
  yearsExpElem.textContent = calculateElapsed(startedWorking).years;

  const leftColCSSSDs = ['skills', 'talks'].map(id =>
    window.getComputedStyle(document.getElementById(id))
  );
  const containerElem = document.querySelector('.sections');

  sizeLeftCol(leftColCSSSDs, containerElem);
  window.addEventListener('load', () =>
    sizeLeftCol(leftColCSSSDs, containerElem)
  );
  window.addEventListener('resize', () =>
    sizeLeftCol(leftColCSSSDs, containerElem)
  );
});
