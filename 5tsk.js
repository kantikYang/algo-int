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

const bfs = (obj) => {
  const arr = [obj];
  const res = [];

  while (arr.length > 0) {
    const cur = arr.shift();
    res.push(cur.val);
    if (cur.hasOwnProperty("left")) {
      arr.push(cur.left);
    }
    if (cur.hasOwnProperty("right")) {
      arr.push(cur.right);
    }
  }

  return res;
};

// console.log(bfs(data));
