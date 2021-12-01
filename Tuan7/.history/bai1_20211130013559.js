//Case 1
const nums = [1, 3, 5, 7, 1, 2, 3, 4, 5, 6];

console.log("-------CASE 1-------");
console.log(
  "So 1 xuat hien " + (nums.join(" ").split("1").length - 1) + " lan"
);
console.log(
  "So 2 xuat hien " + (nums.join(" ").split("2").length - 1) + " lan"
);
console.log(
  "So 3 xuat hien " + (nums.join(" ").split("3").length - 1) + " lan"
);
console.log(
  "So 4 xuat hien " + (nums.join(" ").split("4").length - 1) + " lan"
);
console.log(
  "So 5 xuat hien " + (nums.join(" ").split("5").length - 1) + " lan"
);
console.log(
  "So 6 xuat hien " + (nums.join(" ").split("6").length - 1) + " lan"
);
console.log(
  "So 7 xuat hien " + (nums.join(" ").split("7").length - 1) + " lan"
);

//Case 2
const nums1 = [1, 1, 1, 10, 23, 2, 26, 26];

console.log("-------CASE 2-------");
console.log(
  "So 1 xuat hien " + (nums1.join(" ").split("1").length - 1) + " lan"
);
console.log(
  "So 2 xuat hien " + (nums1.join(" ").split("2").length - 1) + " lan"
);
console.log(
  "So 10 xuat hien " + (nums1.join(" ").split("10").length - 1) + " lan"
);
console.log(
  "So 23 xuat hien " + (nums1.join(" ").split("23").length - 1) + " lan"
);
console.log(
  "So 26 xuat hien " + (nums1.join(" ").split("26").length - 1) + " lan"
);
//Case 3
const nums2 = [1000, 2000, 1000, 2000, 10000, 22222];

console.log("-------CASE 3-------");
console.log(
  "So 1000 xuat hien " + (nums2.join(" ").split("1000").length - 1) + " lan"
);
console.log(
  "So 2000 xuat hien " + (nums2.join(" ").split("2000").length - 1) + " lan"
);
console.log(
  "So 10000 xuat hien " + (nums2.join(" ").split("10000").length - 1) + " lan"
);
console.log(
  "So 22222 xuat hien " + (nums2.join(" ").split("22222").length - 1) + " lan"
);
