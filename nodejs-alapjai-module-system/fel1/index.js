const { increaseAndFormatDate } = require('./utils');

const formatDates = [
  new Date('1999-09-19'),
  new Date('2000-03-10'),
  new Date('2014-10-24')
]

console.log(increaseAndFormatDate(formatDates));