function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // Declare a variable equal to the total length of nums1
  let k = nums1.length - 1;

  // Collaborate m and n to indexes.
  m = m - 1;
  n = n - 1;

  while (n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[k] = nums1[m];
      m--;
    } else {
      nums1[k] = nums2[n];
      n--;
    }

    k--;
  }
}