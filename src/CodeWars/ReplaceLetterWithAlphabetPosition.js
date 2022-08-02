const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const value = prompt('Type any string').toLowerCase().trim();

let valPos = value.split('').map((letter) => {
  if (alphabet.includes(letter)) {
    return alphabet.indexOf(letter) + 1;
  } //else:
  return ' ';
});

valPos = valPos.join().replace(',,', '');
console.log(`${value} == ${valPos}`);
