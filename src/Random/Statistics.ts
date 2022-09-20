const data = [1, 1, 1, 0, 0, 6, 8, 3, 2, 2, 5, 7, 1, 6, 8, 0];
const total = data.length;

//Sort data from smallest to largest:
const ordered = data.sort((a, b) => a - b);
console.log(ordered);

// Since the data is already sorted:
const min = ordered[0];
const max = ordered[total - 1];
const amp = max - min;
console.log(`Amplitude: ${amp}`);

// Quartiles:
const q1 = ordered[Math.floor(total / 4)];
const q2 = ordered[Math.floor(total / 2)];
const q3 = ordered[Math.floor((total * 3) / 4)];
console.log(`Quartis: ${q1}, ${q2} & ${q3}`);

// Average/mean:
const sum = ordered.reduce((a, b) => a + b);
const mean = Math.floor(sum / total);
console.log(`Média: ${mean}`);

const median =
  total % 2 !== 0
    ? // If is odd:
      ordered[Math.floor(total / 2)]
    : //If is even, average the 2 middle values:
      (ordered[total / 2 - 1] + ordered[total / 2]) / 2;
console.log(`Mediana: ${median}`);

// Absolute & Relative Frequency:
const fi = {};
const fr = {};

for (let i = 0; i < total; i++) {
  const value = ordered[i];
  fi[value] ? fi[value]++ : (fi[value] = 1);
}
console.table(fi);

for (const i in fi) {
  const percent = (fi[i] / total) * 100;
  fr[i] = `${percent}%`;
}
console.table(fr);
