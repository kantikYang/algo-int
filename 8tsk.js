const binSearch = (arr, n) => {
  let l = 0;
  let r = arr.length;
  let mid;
  while (l < r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === n) return mid;

    if (arr[mid] < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return 0;
};

// console.log(binSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 3));
