**SLIDING WINDOW ALGORITHM**
* Challenge: https://leetcode.com/problems/longest-substring-without-repeating-characters/
* Solution: https://www.youtube.com/watch?v=wiGpQwVHdE0

```js
function lengthOfLongestSubstring(s) {
  // Declare caches and left and right pointers, at index 0.
  const charMap = new Map();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  while (right < s.length) {
    // Increment the right-pointer character count.
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    // If the right-pointer character count exceeds 1, increment the left-pointer to reduce the count.
    while (charMap.get(s[right]) > 1) {
      charMap.set(s[left], (charMap.get(s[left]) || 1) - 1);
      left++;
    }

    // Update the maximum length of the substring so far.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment the right-pointer.
    right++;
  }

  return maxLength;
}
```
* https://leetcode.com/problems/find-the-k-beauty-of-a-number/
* https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
* https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/

**SLIDING WINDOW ALGORITHM - UNRESTRICTED WINDOW LENGTH**
* Challenge: https://leetcode.com/problems/count-number-of-nice-subarrays/
* Solution: https://www.youtube.com/watch?v=4zNK0rhFfcA


```js
function numberOfSubarrays(nums: number[], k: number): number {
  let oddCount = 0;
  let niceCount = 0;
  let elementCount = 0;
  let left = 0;
  let right = 0;

  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] % 2 === 1) {
      oddCount++;
      elementCount = 0;
    }

    // Check the target condition.
    while (oddCount === k) {
      elementCount++;

      // Uncache the left pointer value.
      if (nums[left] % 2 === 1) {
        oddCount--;
      }

      left++;
    }

    // Increment niceCount.
    niceCount += elementCount;

    // Increment the right pointer value.
    right++;
  }

  return niceCount;
}
```

* https://leetcode.com/tag/sliding-window/
