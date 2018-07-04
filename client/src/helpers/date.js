import format from 'date-fns/format';

function toHoursAndMinutes(date) {
  return format(date, 'HH:mm');
}

function formatToMatchScore(date) {
  return format(date, 'DD MMM YYYY - HH:mm [Local Time]')
}

export default {
  toHoursAndMinutes,
  formatToMatchScore
}