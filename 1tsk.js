const data = [5, 1, 7, 3, 10, 2, 9, 0];
const data1 = [4, 3, -74, 23, 110, 42, 59, 0];
const data2 = [125, 12, 127, 33, 101, 2, 39, 40];

const sortB = (myArr) => {
  const len = myArr.length;
  const arr = [...myArr];
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
};

// console.log(data);
// console.log(sortB(data));
// console.log(sortB(data1));
// console.log(sortB(data2));
