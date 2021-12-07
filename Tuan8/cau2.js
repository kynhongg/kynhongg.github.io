const count = (digits) => {
  let sum = "";
  digits.forEach((item) => {
    count += item.toString();
  });
  let nums = parseInt(count);
  nums += 1;
  count = nums.toString();
  let arr = [];
  for (let i of count) {
    arr.push(parseInt(i));
  }
  return arr;
};
const digits = [1, 2, 3];
console.log(count(digits));
const digits1 = [0];
console.log(count(digits1));
const digits2 = [9];
console.log(count(digits2));
