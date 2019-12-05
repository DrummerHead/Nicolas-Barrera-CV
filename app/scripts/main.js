import calculateElapsed from './calculateElapsed';
import sizeLeftCol from './sizeLeftCol';

document.addEventListener('DOMContentLoaded', () => {
  const elapsedElem = document.getElementById('elapsed');
  if (elapsedElem) {
    elapsedElem.textContent = calculateElapsed(
      elapsedElem.getAttribute('data-started')
    );
  }

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
