const abc = 'abcdefghijklmnopqrstuvwxyz';
const abcUp = abc
  .split('')
  .map((char) => char.toUpperCase())
  .join('');
const specialChars = '!@#$%^&*(),./|<>?';
const numbers = '0123456789';
// Join all to randomize the chars order:
const chars = abc + abcUp + specialChars + numbers;

function generatePass(length: number) {
  //If param not exists:
  if (!length) length = 12;
  let password = '';

  for (let i = 0; i < length; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
}

console.log(generatePass(0));
