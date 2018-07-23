const dateToString = (date, kind) =>
  date ? `${date} ${kind}${date > 1 ? 's' : ''}` : '';

const calculateElapsed = startDate => {
  const miliInAMonthAverage = 2629741666;

  const currentJobStartDate = new Date(startDate).getTime();
  const today = new Date().getTime();
  const elapsed = today - currentJobStartDate;

  const elapsedMonthsTotal = Math.floor(elapsed / miliInAMonthAverage);
  const elapsedYears = Math.floor(elapsedMonthsTotal / 12);
  const elapsedMonths = elapsedMonthsTotal % 12;

  return `${dateToString(elapsedYears, 'year')} ${dateToString(
    elapsedMonths,
    'month'
  )}`;
};

export default calculateElapsed;
