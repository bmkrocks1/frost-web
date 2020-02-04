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
    const sevenDaysAgo = formatPastDate(7);
    return [`R7/${sevenDaysAgo}T12`, `${sevenDaysAgo}T12/P1D`];
  },
  'Last 30 Days': () => {
    const thirtyDaysAgo = formatPastDate(30);
    return [`R30/${thirtyDaysAgo}T12`, `${thirtyDaysAgo}T12/P1D`];
  }
};
