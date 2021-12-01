const case1 = "    hOang Bui   ";

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

const chuanHoa = (str) => {
  str = str.trim().toLowerCase();
  str = str.replace(/\d/g, "");
  str = str.replace(/\s+/g, " ");
  const newStr = str
    .split(" ")
    .map((ele) => {
      return ele.charAt(0).toUpperCase() + ele.slice(1);
    })
    .join(" ");
  return newStr;
};
console.log(standardized(case1));
console.log(standardized(case2));
console.log(standardized(case3));
