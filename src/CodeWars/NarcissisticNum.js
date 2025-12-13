const value = prompt('Type an integer number');
let isNarcissist = false;
let valArr = value.toString().split('');

let digitPow,
  sum = 0;

for (let i = 0; i < valArr.length; i++) {
  digitPow = Math.pow(valArr[i], valArr.length);
  sum += digitPow;
  console.log(digitPow);
}
console.log(`The sum is: ${sum}`);

sum == value ? (isNarcissist = true) : (isNarcissist = false);
console.log(
  `\n${value} ${isNarcissist ? '✅ is' : '❌ is not'} a Narcissistic Number`
);
