interface SortOptions {
  input: string;
  mode: 'minElementByFreq' | 'maxElementByFreq';
  rank?: number; // index based on frequency rank (0 = most frequent)
}

interface SortResult {
  sorted: number[];
  element: number | null;
  groupsByRank: Record<number, number[]>;
}

function sortFrequencyLogRank({
  input,
  mode,
  rank = 0
}: SortOptions): SortResult {
  // 1. Parse input by spaces or integers
  const trimmed = input.trim();
  const numbers = trimmed.includes(' ')
    ? trimmed.split(/\s+/).map(Number)
    : trimmed.split('').map(Number);

  if (numbers.length === 0) {
    return { sorted: [], element: null, groupsByRank: {} };
  }

  // 2. Count frequencies
  const frequencyMap = new Map<number, number>();
  for (const num of numbers) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // 3. Build sorted array (frequency desc, value asc)
  const sorted = [...numbers].sort((a, b) => {
    const freqA = frequencyMap.get(a)!;
    const freqB = frequencyMap.get(b)!;
    return freqA !== freqB ? freqB - freqA : a - b;
  });

  // 4. Unique frequencies, sorted descending
  const uniqueFrequencies = [...new Set(frequencyMap.values())].sort(
    (a, b) => b - a
  );

  // 5. Build groupsByRank directly from the sorted array
  const freqToRankIndex = new Map<number, number>();
  uniqueFrequencies.forEach((freq, idx) => freqToRankIndex.set(freq, idx));

  const groupsByRank: Record<number, number[]> = {};
  for (const num of sorted) {
    const freq = frequencyMap.get(num)!;
    const rankIdx = freqToRankIndex.get(freq)!;

    if (!groupsByRank[rankIdx]) {
      groupsByRank[rankIdx] = [];
    }
    groupsByRank[rankIdx].push(num);
  }

  // 6. Validate rank with explicit guard (lang agnostic)
  if (rank < 0 || rank >= uniqueFrequencies.length) {
    return { sorted, element: null, groupsByRank };
  }

  // 7. Compute the result element based on mode
  const targetFrequency = uniqueFrequencies[rank];
  let resultNumber: number | null = null;

  const isBetter =
    mode === 'maxElementByFreq'
      ? (a: number, b: number) => a > b
      : (a: number, b: number) => a < b;

  for (const [num, count] of frequencyMap) {
    if (
      count === targetFrequency &&
      (resultNumber === null || isBetter(num, resultNumber))
    ) {
      resultNumber = num;
    }
  }

  return { sorted, element: resultNumber, groupsByRank };
}

// Example usage
const { sorted, element, groupsByRank } = sortFrequencyLogRank({
  input: '-2 6 0 -2 8 6 6 4 8',
  mode: 'minElementByFreq',
  rank: 1
});

console.log(`element: ${element}`);
console.log(sorted);
console.log(groupsByRank);
