const str1 = "tranduong";
const str2 = "hitclubhiuhiu";
const str3 = "aabb";

function Find(str) {
  for (let i in str) {
    if (str.indexOf(str[i]) == i && str.lastIndexOf(str[i]) == i) return i;
  }
  return -1;
}
console.log(Find(str1));
console.log(Find(str2));
console.log(Find(str3));
