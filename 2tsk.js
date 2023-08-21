const selectionSort = (target) => {
  const arr = [...target];
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    let min = [Infinity];
    for (let j = i; j < len; j++) {
      if (arr[j] < min[0]) {
        min[0] = arr[j];
        min[1] = j;
      }
    }
    [arr[i], arr[min[1]]] = [arr[min[1]], arr[i]];
  }
  return arr;
};

const data = [5, 1, 7, 3, 10, 2, 9, 0];
const data1 = [4, 3, -74, 23, 110, 42, 59, 0];
const data2 = [125, 12, 127, 33, 101, 2, 39, 40];

// console.log(data);
// console.log(selectionSort(data).join(" "));
// console.log(selectionSort(data1).join(" "));
// console.log(selectionSort(data2).join(" "));
