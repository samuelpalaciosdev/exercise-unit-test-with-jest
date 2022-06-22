const { fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app');

test('One euro should be 1.2 Dollars', () => {
  expect(parseFloat(fromEuroToDollar(3.5))).toBe(4.2);
});

test('One dollar should be 106.58 yens', () => {
  expect(parseFloat(fromDollarToYen(4))).toBe(426.33);
});

test('One yen should be 0.0063 pounds', () => {
  expect(parseFloat(fromYenToPound(2))).toBe(0.0125);
});
