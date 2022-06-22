let oneEuroIs = {
  JPY: 127.9, // japan yen
  USD: 1.2, // us dollar
  GBP: 0.8, // british pound
};

const fromEuroToDollar = function (euroValue) {
  const dollar = euroValue * oneEuroIs.USD;
  return dollar;
};

// de dolar a yen pero solo sé la taza de euro a yen

const fromDollarToYen = function (dollarValue) {
  // const yen = dollarValue * fromEuroToDollar(127.9);
  const yen = ((dollarValue / oneEuroIs.USD) * oneEuroIs.JPY).toFixed(2);
  return yen;
};

// de yen a libra pero solo sé la taza de euro a yen
const fromYenToPound = function (yenValue) {
  const pound = ((yenValue / oneEuroIs.JPY) * oneEuroIs.GBP).toFixed(4);
  return pound;
};

console.log(fromEuroToDollar(1)); // 1.2
console.log(fromDollarToYen(1)); // 106.58
console.log(fromYenToPound(1)); // 0.0063

module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound };
