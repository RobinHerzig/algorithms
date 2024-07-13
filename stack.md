**STACK ALGORITHM**

- Challenge: https://leetcode.com/problems/valid-parentheses/
- Solution: https://www.youtube.com/watch?v=WTzjTskDFMg

```js
function isValid(s) {
  // Declare a stack.
  const stack = [];

  // Iterate the dataset.
  for (const char of s) {
    // Push to the stack.
    if (char === "(" || char === "[" || char === "{") {
      stack.push(char);
      continue;
    }

    // Remove from the stack.
    const prev = stack.pop();

    // The closing character must match the last opening character pushed to the stack.
    if (char === ")" && prev === "(") {
      continue;
    } else if (char === "]" && prev === "[") {
      continue;
    } else if (char === "}" && prev === "{") {
      continue;
    }

    return false;
  }

  return stack.length === 0;
}
```

- https://leetcode.com/problems/baseball-game/
- https://leetcode.com/tag/stack/

**MONOTONIC STACK ALGORITHM**

For challenges that involve finding the the next greater/smaller element in a sequence. These will usually return an array with the same length of the parameter.

- Challenge: https://leetcode.com/problems/daily-temperatures/
- Solution:
  >

```js
function dailyTemperatures(temperatures) {
  // Declare the stack and result arrays. Prefill result with the default value.
  const stack = [];
  const result = new Array(temperatures.length).fill(0);

  // Iterate the dataset using a monotonic stack algorithm.
  for (let i = 0; i < temperatures.length; i++) {
    const temperature = temperatures[i];

    // While the current element is greater than the element referenced at the top of the stack.
    while (temperature > temperatures[stack.at(-1)]) {
      const index = stack.pop();

      // Reassign the value in result using the index that was stored in the stack.
      result[index] = i - index;
    }

    // Push the current index in the stack.
    stack.push(i);
  }

  return result;
}
```

- https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
- https://leetcode.com/problems/next-greater-element-i/
- https://leetcode.com/problems/next-greater-element-ii/
- https://leetcode.com/tag/monotonic-stack/
