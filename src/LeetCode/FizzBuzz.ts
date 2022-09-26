function FizzBuzz(times: number) {
  let result: string[] = [];

  for (let i = 1; i <= times; i++) {
    let output: string = '';
    if (i % 3 === 0 && i % 5 === 0) {
      output += 'FizzBuzz';
    } else if (i % 3 === 0) {
      output += 'Fizz';
    } else if (i % 5 === 0) {
      output += 'Buzz';
    } else {
      output += i;
    }
    result = [...result, output];
  }

  return result;
}

console.log(FizzBuzz(15));
// Run this function ☝🏽 times
