const getMonthName = (monthNumber: number) => {
  const months = [
    'Jan',
    'Feb',
    'March',
    'April',
    'May',
    'June',
    'July',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  if (monthNumber > 0 && monthNumber <= months.length) {
    return months[monthNumber - 1];
  }
  return '';
};

const differnceBetweenDates = (date1: any, date2: any) =>
  Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24))
