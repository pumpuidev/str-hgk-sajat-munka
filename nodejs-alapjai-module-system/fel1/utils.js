const increaseDate = (date, dayNum = 3) => date.setDate(date.getDate() + dayNum)

const increaseAndFormatDate = (dates) =>
dates.map(dot => new Date(increaseDate(dot)).toLocaleDateString('hu-HU'))

module.exports = Object.freeze({
  increaseAndFormatDate
})