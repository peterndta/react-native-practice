export function getFormattedDate(date) {
  // return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`; // C1
  return date.toISOString().slice(0, 10); // C2
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
