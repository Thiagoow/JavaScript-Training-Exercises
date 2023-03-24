const data = [12, 12, 20, 21, 22, 24, 24, 24, 30, 32, 32, 32, 54];
const total = data.length;

//Sort data from smallest to largest:
const ordered = data.sort((a, b) => a - b);
console.log(ordered);

// Since the data is already sorted:
const min = ordered[0];
const max = ordered[total - 1];
const dataAmp = max - min;
console.log(`Amplitude total: ${dataAmp}`);

const median =
  total % 2 !== 0
    ? // If is odd:
      ordered[Math.floor(total / 2)]
    : //If is even, average the 2 middle values:
      (ordered[total / 2 - 1] + ordered[total / 2]) / 2;
console.log(`Mediana: ${median}`);

// Quartiles:
const q1 = ordered[Math.floor(total / 4)];
const q3 = ordered[Math.floor((total * 3) / 4)];
console.log(`Quartis: ${q1}, ${median} & ${q3}`);

// Average/mean:
const sum = ordered.reduce((a, b) => a + b);
console.log('Soma: ' + sum);
const average = sum / total;
console.log(`Média: ${average}`);

// Absolute & Relative Frequency:
const fi = {};
const fr = {};

for (let i = 0; i < total; i++) {
  const value = ordered[i];
  fi[value] ? fi[value]++ : (fi[value] = 1);
}
console.log('Frequência Absoluta (fi):');
console.table(fi);

for (const i in fi) {
  const percent = Number((fi[i] / total).toFixed(2)) * 100;
  fr[i] = `${percent}%`;
}
console.log('Frequência Relativa (fr):');
console.table(fr);

// Variance, Stantard Deviation & Coefficient of Variation:
const squareDifferences = data.map((value) => Math.pow(value - average, 2));
const sumSquareDifferences = squareDifferences.reduce((a, b) => a + b);
console.log('Diferenças ao quadrado (média - x)²');
console.table(squareDifferences);
console.log(`Soma Diferenças (média - x)²: ${sumSquareDifferences}`);

const variance = sumSquareDifferences / total;
const standardDeviation = Math.sqrt(variance);
const coefficientOfVariation = (standardDeviation / average) * 100;

console.log(`Variância: ${variance}`);
console.log(`Desvio Padrão (s): ${standardDeviation}`);
console.log(`Coeficiente de Variação (cv): ${coefficientOfVariation}%`);
