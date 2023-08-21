const primaryNumber = (n) => {
  const res = [];
  const ans = [];

  function isSimp(num) {
    let k = 0;
    for (let i = 1; i < num + 1; i++) {
      if (num % i === 0) {
        k++;
      }
      if (k > 2) return false;
    }
    return true;
  }

  for (let i = 0; i < n + 1; i++) {
    res[i] = true;
  }

  for (let i = 2; i < n + 1; i++) {
    if (res[i] === true) {
      if (isSimp(i)) {
        for (let j = i + i; j < n + 1; j += i) {
          res[j] = false;
        }
      }
    }
  }
  for (let i = 2; i < n + 1; i++) {
    if (res[i]) ans.push(i);
  }

  return ans;
};

// console.log(primaryNumber(30));
