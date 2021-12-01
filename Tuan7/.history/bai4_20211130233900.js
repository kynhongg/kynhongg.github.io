// Bài 4
//- Lấy ra chính xác tất cả gmail trong đoạn text sau
// Yêu cầu dùng regex

const textEmail = "mynamebvh@gmail.comdfklgjfdkjgkfdjgkldtranduong@gmail.com";

const textPhone = "dfkdsklfjlksdjfklsd097915092111111dfjhdsjfhds0979120734";

const regex = /(m[a-z]+@[a-z]+\.com)|(t[a-z]+@[a-z]+\.com)/g;

// const emails = textEmail.match(/(m[\w]+@[\w]+\.com)|(t[\w]+@[\w]+\.com)/g);
const emails = textEmail.match(regex);
const phones = textPhone.match(/[0-9]{10}/g);
console.log(emails);
console.log(phones);
