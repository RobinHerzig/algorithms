**SLIDING WINDOW ALGORITHM**

- Challenge: https://leetcode.com/problems/longest-substring-without-repeating-characters/
- Solution: https://www.youtube.com/watch?v=wiGpQwVHdE0

```js
function lengthOfLongestSubstring(s) {
  // Declare caches and left and right pointers, at index 0.
  const charMap = new Map();
  let maxLength = 0;
  let left = 0;
  let right = 0;

  // Use a sliding window algorithm.
  while (right < s.length) {
    // Cache the right pointer value.
    charMap.set(s[right], (charMap.get(s[right]) || 0) + 1);

    // If the right pointer character count exceeds 1, increment the left pointer to reduce the count.
    while (charMap.get(s[right]) > 1) {
      charMap.set(s[left], (charMap.get(s[left]) || 1) - 1);
      left++;
    }

    // Update the maximum length of the substring so far.
    maxLength = Math.max(maxLength, right - left + 1);

    // Increment the right pointer.
    right++;
  }

  return maxLength;
}
```

- https://leetcode.com/problems/find-the-k-beauty-of-a-number/
- https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
- https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
- https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

**SLIDING WINDOW ALGORITHM - UNRESTRICTED WINDOW LENGTH**

- Challenge: https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/
- Solution:
  > Use the standard sliding window approach, except for line 17. Because the window size isn't constrained, we need to use some math to account for all combinations.
  >
  > (In Example 1, after getting subarray `[1,3,2,3]`, it's not possible to include both `[1,3,2,3,3]` and `[3,2,3]`. They require incrementing either the right OR left pointer respectively, and we can't do both.)
  >
  > The solution is to increment the left pointer, but first count the number of trailing elements (to the right of the right pointer) to account for the additional subarrays that we won't actually visit.

```js
function countSubarrays(nums: number[], k: number): number {
  // Declare caches and left and right pointers, at index 0.
  const maxValue = Math.max(...nums);
  let maxValueCount = 0;
  let subarrayCount = 0;
  let left = 0;
  let right = 0;

  // Use a sliding window algorithm.
  while (right < nums.length) {
    // Cache the right pointer value.
    if (nums[right] === maxValue) {
      maxValueCount++;
    }

    while (maxValueCount >= k) {
      // Increment subarrayCount. Count the current subarray and all combinations towards the right.
      subarrayCount += nums.length - right;

      // Remove left pointer value from cache.
      if (nums[left] === maxValue) {
        maxValueCount--;
      }

      // Increment the left pointer.
      left++;
    }

    // Increment the right pointer.
    right++;
  }

  return subarrayCount;
}
```

- https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/
- https://leetcode.com/tag/sliding-window/
