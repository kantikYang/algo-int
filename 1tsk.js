const data = [5, 1, 7, 3, 10, 2, 9, 0];

const sortB = (arr) => {
  const len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
};

sortB(data);

console.log(data);
