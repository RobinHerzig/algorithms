**BINARY SEARCH ALGORITHM**

  > Used for finding a single value within an array of sorted values. Quicker than iterating from start to end.

- Challenge: https://leetcode.com/problems/binary-search/
- Solution: https://www.youtube.com/watch?v=s4DPM8ct1pI

```js
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (target < nums[middle]) {
      right = middle - 1;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return -1;
}
```

- https://leetcode.com/problems/find-smallest-letter-greater-than-target/
- https://leetcode.com/problems/search-insert-position/ 
- https://leetcode.com/tag/binary-search/
