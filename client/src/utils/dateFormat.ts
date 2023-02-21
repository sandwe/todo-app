export const changeDateFormat = (date: string): string =>
  new Intl.DateTimeFormat('ko', { dateStyle: 'long', timeStyle: 'short' }).format(new Date(date));
