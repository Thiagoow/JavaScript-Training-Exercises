const value = prompt('Type an integer number');
let isNarcissist = false;

//Convert to string to check it's length:
let valStr = value.toString();
//Split value to get all the digits && put on a Array:
let valArr = valStr.split('');
//console.log(valStr, valArr);

let digitPow,
  sum = 0;

for (let i = 0; i < valArr.length; i++) {
  digitPow = Math.pow(valArr[i], valArr.length);
  //console.log(digitPow);
  sum += digitPow;
}
console.log(`The sum is: ${sum}`);

sum === value ? (isNarcissist = true) : (isNarcissist = false);
isNarcissist
  ? console.log(`✔ ${value} is a Narcissistic Number`)
  : console.log(`❌ ${value} ISN'T a Narcissistic Number`);
