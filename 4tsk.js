const data = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4 },
    right: { val: 5 },
  },
  right: {
    val: 3,
    left: { val: 6 },
    right: { val: 7 },
  },
};

const dfs = (obj) => {
  const res = [];
  res.push(obj.val);

  if (obj.hasOwnProperty("left")) {
    res.push(...dfs(obj.left));
  }
  if (obj.hasOwnProperty("right")) {
    res.push(...dfs(obj.right));
  }

  return res;
};

// console.log(dfs(data));
