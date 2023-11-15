const _getMonth = (index: number): string => {
  const months: {[id: number]: string} = {
    0: 'January',
    1: 'Febraury',
    2: 'March',
    3: 'April',
    4: 'May',
    5: 'June',
    6: 'July',
    7: 'August',
    8: 'September',
    9: 'October',
    10: 'November',
    11: 'December',
  };
  if (Object.hasOwn(months, index)) {
    return months[index];
  } else {
    return 'Month Not Found';
  }
};

export const getHumanizedDate = (isoTimestamp: string): string => {
    let date = new Date(isoTimestamp)
    return `${date.getDate()} ${_getMonth(date.getMonth())} ${date.getFullYear()}`
};

export const getElapsedDate = (isoTimestamp: string): string => {
  return '';
};
