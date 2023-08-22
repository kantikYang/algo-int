const binSearch = (arr, n) => {
  let l = 0;
  let r = arr.length;
  let mid;
  while (l <= r) {
    mid = Math.floor((l + r) / 2);
    if (arr[mid] === n) return mid;
    // console.log(arr[mid], mid);
    if (arr[mid] < n) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return -1;
};

console.log(binSearch([600], 600));
