import format from 'date-fns/format';

function toHoursAndMinutes(date) {
  return format(date, 'HH:mm');
}

export default {
  toHoursAndMinutes
}