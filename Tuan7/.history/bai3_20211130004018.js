const case1 = "    hOang Bui   ";

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

const chuanHoa = (str) => {
  str = str.trim().toLowerCase();
  str = str.replace(/\d/g, "");
  str = str.replace(/\s+/g, " ");
  const newStr = str
    .split(" ")
    .map((element) => {
      return element.charAt(0).toUpperCase();
    })
    .join(" ");
  return newStr;
};
console.log(chuanHoa(case1));
console.log(chuanHoa(case2));
console.log(chuanHoa(case3));
