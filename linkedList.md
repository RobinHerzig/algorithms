**LINKED LIST ALGORITHM**
* Challenge: https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
* Solution: https://www.youtube.com/watch?v=-Sp8IZS_nLI

```js
function getDecimalValue(head) {
    // Cache the value from each node.
    const cache = [];
    let node = head;

    // If the current node is valid, push the value into the cache and iterate to the next node.
    while (node) {
        cache.push(node.val);
        node = node.next;
    }

    // Convert the cache into a number.
    const binary = cache.join('');
    const number = parseInt(binary, 2);

    // Return the number.
    return number;
}
```

* Challenge: https://leetcode.com/problems/middle-of-the-linked-list/
* Solution: 

```js
function middleNode(head) {
  // Declare fast and slow pointers.
  let fast = head;
  let slow = head;

  // While the fast pointer is valid, increment both pointers.
  while (fast) {
    // If fast lands on the last node, do not increment slow.
    if (!fast.next) {
      break;
    } else {
      fast = fast.next.next;
    }

    slow = slow.next;
  }

  // Return the node value at the slow pointer.
  return slow;
}
```

Practice:
* https://leetcode.com/problems/middle-of-the-linked-list/description/
* 
* https://leetcode.com/problems/add-two-numbers-ii/
* https://leetcode.com/tag/linked-list/
