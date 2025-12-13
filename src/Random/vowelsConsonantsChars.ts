function vowelsConsonantsChars(input: string) {
  const vowels: string[] = [];
  const consonants: string[] = [];

  for (const char of input.toLowerCase()) {
    if ('aeiou'.includes(char)) {
      vowels.push(char);
    } else if (char >= 'a' && char <= 'z') {
      consonants.push(char);
    }
  }

  return { vowels, consonants };
}

const userInput = prompt('Type any string:') || '';
const { vowels, consonants } = vowelsConsonantsChars(userInput);

console.log(`
Your string has ${vowels.length} vowels:
${vowels}

and ${consonants.length} consonants:
${consonants}

with ${vowels.length + consonants.length} letters and ${userInput.length} chars.\n`);
