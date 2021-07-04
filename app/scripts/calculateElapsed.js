// Takes startDate:string compatible with Date constructor
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date
// Returns { years:number, months:number } representing time passed since startDate
// NOTE: MS stands for milliseconds
//
const calculateElapsed = startDate => {
  const monthAverageMS = 2629741666;

  const startDateMS = new Date(startDate).getTime();
  const todayMS = new Date().getTime();
  const elapsedMS = todayMS - startDateMS;

  const elapsedMonthsTotal = Math.floor(elapsedMS / monthAverageMS);
  const years = Math.floor(elapsedMonthsTotal / 12);
  const months = elapsedMonthsTotal % 12;

  return { years, months };
};

// Takes date:string and kind:string
// Returns string combining date and pluralized kind
//
const dateToString = (date, kind) =>
  date ? `${date} ${kind}${date > 1 ? 's' : ''}` : '';

// Takes elapsed: { years:number, months:number }
// Returns string representation of elapsed time
//
export const elapsedToString = elapsed =>
  `${dateToString(elapsed.year, 'year')} ${dateToString(
    elapsed.month,
    'month'
  )}`;

export default calculateElapsed;
