/**
 * @param date
 * Helper function to get days of the week as a string
 * @returns the day of the week as a string format
 */
export function getDayString(date: string | number | Date): string {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const d = new Date(date);
  const day = weekdays[d.getDay()];
  return day;
}

/**
 * @param date
 * Helper function to get months of the year as a string
 * @returns the month of the year as a string format
 */
export function getMonthString(date: string | number | Date): string {
  const d = new Date(date); // yyyy-mm-dd
  const month = d.toLocaleString('en-GB', { month: 'long' }); //set first parameter to default for language detection
  return month;
}

/**
 * Extracts the time from a given date and returns it in 'hh:mm' format using the en-GB locale.
 * @param {string | number | Date} date - The date object or string representation of a date.
 * @returns {string} The time extracted from the provided date in 'hh:mm' format.
 */
export function getTimeFromDate(date: string | number | Date) {
  const d = new Date(date);
  const time = d.toLocaleTimeString('en-GB').slice(0, 5);
  return time;
}
