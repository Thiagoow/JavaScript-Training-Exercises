const letter1 = prompt('Type a letter');
const letter2 = prompt('Type another letter');

const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
const alphabetUp = alphabet.map((letter) => letter.toUpperCase());
console.log(alphabetUp);

function distanceToLastLetter(letra1) {
  const isString = alphabet.includes(letra1);

  const typeOfVar = typeof letra1;
  /* Verifying with objet constructor:
  Object.prototype.toString.call(letra1) === "[object Number]";
  */

  if (isString) {
    let exists = alphabet.indexOf(letra1);
    // +1 to account for array starting at 0
    const res = alphabet.length - (exists + 1);

    console.log(
      `The distance between "${letra1.toUpperCase()}" to
    "${alphabet.slice(-1)[0].toUpperCase()}" is ${res} letters`
    );
  } else if (typeOfVar === 'number') {
    console.log('Type a letter, not a number❗');
  } else if (!isString) {
    console.log('Type a letter, not another thing');
  } else if (letra1 === '' || ' ') {
    console.log('Type a letter from the alphabet');
  } else {
    console.log('how did you get here?');
  }
}
distanceToLastLetter(letter1);

function distanceBetweenTwoLetters() {
  const isValid1 = alphabet.includes(letter1);
  const isValid2 = alphabet.includes(letter2);

  let valid = false;
  if (isValid1 && isValid2) {
    valid = true;
  }

  if (valid) {
    const indexOfFirst = alphabet.indexOf(letter1) + 1;
    const indexOfLast = alphabet.indexOf(letter2) + 1;

    // -1 to account for the number of letters between the two letters
    const res = indexOfLast - indexOfFirst - 1;

    console.log(
      `The distance between "${letter1.toUpperCase()}" and "${letter2.toUpperCase()}" is ${res} letter(s)`
    );
  } else {
    console.log('Both or one of the inputs was not a valid letter❗');
  }
}
distanceBetweenTwoLetters();
