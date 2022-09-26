const nums = [1, 1, 1, 1];

function runningSum(nums: number[]) {
  let result = new Array(nums.length);
  result[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    result[i] = result[i - 1] + nums[i];
  }
  return result;
}

console.log(runningSum(nums));

/* Doing this with map & ternary
operator instead of for loop:

nums.map((num, index) => {
  index > 0
    ? (result[index] = result[index - 1] + num)
    : (result[index] = num);
}); */
