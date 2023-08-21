const binSearch = (arr, n) => {
  let l = 0;
  let r = arr.length;
  let mid;
  while (l < r) {
    mid = Math.floor((l + r) / 2 + 1);
    if (arr[mid] === n) return mid;

    if (arr[mid] < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

// console.log(
//   binSearch([2, 5, 7, 12, 23, 30, 34, 54, 65, 66, 76, 85, 222, 432, 777], 30)
// );
