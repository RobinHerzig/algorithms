**TWO POINTERS ALGORITHM**
* Challenge: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
* Solution: https://www.youtube.com/watch?v=cQ1Oz4ckceM

```js
function twoSum(numbers, target) {
  // Declare pointers at the beginning and end of the array.
  let left = 0;
  let right = numbers.length - 1;

  // Increase the left pointer and/or decrease the right pointer until the condition is met.
  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
}
```

Practice:
* https://leetcode.com/problems/valid-palindrome/description/
* https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/
* https://leetcode.com/problems/reverse-words-in-a-string-iii/
* https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/
* https://leetcode.com/tag/two-pointers/
