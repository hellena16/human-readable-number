module.exports = function toReadable(number) {
  const digit = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'hundred',
  }
  if (number <= 20) {
    return digit[number]
  }
  let tens = Number(`${String(number).slice(0, 1)}0`)
  let hundred = Number(`${String(number).slice(1, 2)}0`)
  if (number <= 99) {
    if (String(number)[1] === '0') {
      return `${digit[tens]}`
    } else {
      return `${digit[tens]} ${digit[String(number).slice(1)]}`
    }
  }
  if (String(number).length === 3) {
    if (Number(String(number).slice(1,3))<=20 && String(number).slice(1,3) >10){
      return`${digit[String(number).slice(0, 1)]} ${digit[100]} ${digit[String(number).slice(1,3)]}`
    }
    if (String(number)[1] === '0' && String(number)[2] === '0') {
      return `${digit[String(number).slice(0, 1)]} ${digit[100]}`
    }
    if (String(number)[1] === '0') {
      return `${digit[String(number).slice(0, 1)]} ${digit[100]} ${
        digit[String(number).slice(2)]
      }`
    }
    if (String(number)[2] === '0') {
      return `${digit[String(number).slice(0, 1)]} ${digit[100]} ${digit[hundred]}`
    } else {
      return `${digit[String(number).slice(0, 1)]} ${digit[100]} ${
        digit[hundred]
      } ${digit[String(number).slice(2)]}`
    }
  }
}
