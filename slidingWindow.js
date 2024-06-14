/*
SLIDING WINDOW ALGORITHM
*/

/*
Longest Substring Without Repeating Characters
https://leetcode.com/problems/longest-substring-without-repeating-characters/
https://www.youtube.com/watch?v=wiGpQwVHdE0
*/

function lengthOfLongestSubstring(s) {
  // Declare caches and left and right pointers, at index 0.
  const charMap = new Map();
  let left = 0;
  let right = 0;
  let maxLength = 0;

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

// https://leetcode.com/tag/sliding-window/
