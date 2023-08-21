const bracket = (str) => {
  const stack = [];

  function isValid(left, right) {
    return (
      (left === "{" && right === "}") ||
      (left === "[" && right === "]") ||
      (left === "(" && right === ")")
    );
  }

  for (let i = 0; i < str.length; i++) {
    if (isValid(stack[stack.length - 1], str[i])) {
      stack.pop();
    } else {
      stack.push(str[i]);
    }
  }

  return stack.length === 0;
};

console.log(bracket("[()]"));
console.log(bracket("[{)}]"));
console.log(bracket("[{]}"));
console.log(bracket("{[([({{()}})])]}"));
