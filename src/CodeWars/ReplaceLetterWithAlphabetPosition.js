const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const value = prompt('Type any string').toLowerCase().trim();

const valPos = value.split('').map((letter) => {
  if (alphabet.includes(letter)) {
    return alphabet.indexOf(letter) + 1;
  } //else:
  return ' ';
});

console.log(`${value} == ${valPos}`);
