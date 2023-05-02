const DateAndDayGenerator = (date: any) => {
  const dayName = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const monthName = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const daysInMonth = new Date(year, month + 1, 0).getDate(); // last day of month
  const dayOfWeek = date.getDay();

  return {
    day: dayName[dayOfWeek],
    date: dayOfMonth,
    month: monthName[month],
    year: year,
    daysInMonth: daysInMonth,
  };
};
export default DateAndDayGenerator;
