const insertionSort = (target) => {
  const res = [target[0]];
  const len = target.length;

  for (let i = 1; i < len; i++) {
    const curr = target[i];
    res.push(target[i]);

    for (let j = res.length - 1; j > 0; j--) {
      if (res[j] < res[j - 1]) {
        [res[j], res[j - 1]] = [res[j - 1], res[j]];
      }
    }
  }
  return res;
};

const data = [5, 1, 7, 3, 10, 2, 9, 0];
const data1 = [4, 3, -74, 23, 110, 42, 59, 0];
const data2 = [125, 12, 127, 33, 101, 2, 39, 40];

// console.log(data);
// console.log(insertionSort(data).join(" "));
// console.log(insertionSort(data1).join(" "));
// console.log(insertionSort(data2).join(" "));
// console.log(insertionSort([Infinity, Infinity, Infinity]).join(" "));
