// @flow
import format from 'date-fns/format';
import subDays from 'date-fns/subDays';

export const formatPastDate = (daysAgo: number = 0) =>
  format(subDays(new Date(), daysAgo), 'yyyy-MM-dd');

export default {
  'Today': () => {
    const today = formatPastDate();
    return ['R24/' + today, today + '/PT1H'];
  },
  'Yesterday': () => {
    const yesterday = formatPastDate(1);
    return ['R24/' + yesterday, yesterday + '/PT1H'];
  },
  'Last 7 Days': () => {
    let sevenDaysAgo = formatPastDate(7);
    return [`R7/${sevenDaysAgo}T12`, `${sevenDaysAgo}T12/P1D`];
  },
  'Last 14 Days': () => {
    let fourteenDaysAgo = formatPastDate(14);
    return [`R14/${fourteenDaysAgo}T12`, `${fourteenDaysAgo}T12/P1D`];
  }
};
