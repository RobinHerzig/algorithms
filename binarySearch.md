**BINARY SEARCH ALGORITHM**

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

- 
- 
- 
- https://leetcode.com/tag/binary-search/
