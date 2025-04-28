import formatCurrency from "../scripts/utils/money.js";

console.log('Test suite: formatCurrency...')

function runTest(testInput, expectedValue) {
  if(formatCurrency(testInput) === expectedValue) {
    console.log('Passed');
  } else {
    console.log('%cFailed!!!!!!!!!!!!!!!!!!!!!!!!!!', 'color: red; font-weight: bold;');
  }
}

console.log('Converts cents into dollars:');
runTest(2095, '20.95');

console.log('Works with zero:');
runTest(0, '0.00');

console.log('Correctly rounds positive decimal up:');
runTest(2000.5, '20.01');

console.log('Correctly rounds positive decimal down:')
runTest(2000.4, '20.00');

console.log('Correctly rounds negative decimal down');
runTest(-2000.5, '-20.01');