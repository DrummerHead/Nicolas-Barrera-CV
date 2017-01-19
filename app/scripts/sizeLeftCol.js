const getTotalHeight = CSSSD =>
  ['paddingBottom', 'height', 'paddingTop'].map(prop =>
    parseFloat(CSSSD[prop])
  ).reduce((prev, curr) =>
    prev + curr
  , 0);

const sizeLeftCol = (leftColCSSSDs, container) => {
  if (window.innerWidth >= 1240) { // app/styles/_variables.scss > $charlie
    const leftColHeight = leftColCSSSDs.map(CSSSD =>
      getTotalHeight(CSSSD)
    ).reduce((prev, curr) =>
      prev + curr
    , 0);

    container.setAttribute('style', `height: ${Math.ceil(leftColHeight) + 10}px`);
  } else {
    container.removeAttribute('style');
  }
};

export default sizeLeftCol;
