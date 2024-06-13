// Boyer-Moore algorithm
function majorityElement(nums: number[]): number {
  let candidate;
  let count = 0;

  for (const num of nums) {
    if (count === 0) {
      candidate = num;
    }

    count += num === candidate ? 1 : -1;
  }

  return candidate;
}

console.log(majorityElement([3, 2, 3]), 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]), 2);
// https://leetcode.com/problems/majority-element/

// nums: number[]. 1 <= nums.length <= 5*10^4. -10^9 <= nums[i] <= 10^9. Unsorted.
// Return the majority element (appears more than nums.length/2 times). An answer will always exist.

// Use a sliding window algorithm.
// Sort the array.
// Iterate the right pointer until it no longer matches the left pointer. If the length is greater than the previous, cache it.
// Return the max length.
