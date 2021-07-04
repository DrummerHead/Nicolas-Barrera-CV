import calculateElapsed, { elapsedToString } from './calculateElapsed';
import sizeLeftCol from './sizeLeftCol';

const startedWorking = '2007-03-01';

document.addEventListener('DOMContentLoaded', () => {
  // Time calculations
  //
  const presentJobElapsedElem = document.getElementById('elapsed');
  if (presentJobElapsedElem) {
    presentJobElapsedElem.textContent = elapsedToString(
      calculateElapsed(presentJobElapsedElem.getAttribute('data-started'))
    );
  }

  document.getElementById('expYears').textContent = calculateElapsed(
    startedWorking
  ).years;

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  // Layout tweaking
  //
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
