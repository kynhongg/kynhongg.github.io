const case1 = "    hOang Bui   ";

const case2 = " hOANG      BUI   hOang     ";

const case3 = "23traN    dUOng23     ";

function chuanHoa(str) {
  str = str.trim().toLowerCase();
  str = str.replace(/\d/g, "");
  str = str.replace(/\s+/g, " ");
  function newStr(str) {
    str = str
      .split(" ")
      .map((element) => {
        return element.charAt(0).toUpperCase() + element.slice(1);
      })
      .join(" ");
    return str;
  }
}
console.log(chuanHoa(case1));
console.log(chuanHoa(case2));
console.log(chuanHoa(case3));
