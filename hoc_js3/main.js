// dùng đệ qui trong js
// tính giai thua n * gt(n - 1)
function giaiThua(n) {
  if (n === 1) return 1;
  else return n * giaiThua(n - 1);
}

console.log(giaiThua(5));

// tính tổng của các chữ số
function sum(n) {
  if (n === 0) return 0;
  else return n + sum(n - 1);
}

console.log(sum(10));

// Kiểm tra người dùng có nhập quá 150 kí tự hay không
let message = prompt("Nhập kí tự: ");

if (message.length <= 150) {
  alert("Bạn đã nhập " + message.length + " kí tự");
} else {
  alert("Bạn đã nhâp quá " + message - message.length + " kí tự");
}

// slice cắt chuỗi  slice(n, n) -> n đầu vị trí muốn cắt đầu, n sau vị trí cuối - 1
let number = "123456789";

console.log(number.slice(4, 7)); // 4 - 6

// cắt chuỗi dùng substring(n, n)-> gần giống như slice
let text = "Hôm nay em đẹp thế emm";
console.log(text.substring(4, text.length));

console.log(text.substring(text.length, 5)); // khi giá trị nhỏ hơn ở cuối thì sẽ tự động đổi lại đối với sub string thì giá trị nhỏ là start

// trim() dùng để loại bỏ khoảng trắng ở đầu và cuối của chuỗi
let text1 = "                      Chào các bạn                    ";
console.log(text1.trim()); //còn có trimStart() và trimEnd()

// dung concat để nối chuỗi
let ho = "Huỳnh";
let name = "Đạt";

console.log(`Ten cua ban la: ${ho.concat(" ", name)}`);

// indexOf(value) -> tìm kiếm kí tự (value) tìm vị trí của value có trong chuỗi hay không nếu có trả về index của nó ngược lại return -1
let text2 = "Hôm nay trời mây cực. Đặt bàn tay mình ngay ngưc";
if (text2.indexOf("cực") > 0) {
  console.log("Chữ cực có xuất hiện ở : " + text2.indexOf("cực"));
} else {
  console.log("Không có từ cực trong đoạn text trên");
}

// lastIndexOf(value) -> tìm kiếm kí tự (value) tìm vị trí xuất hiện cuối cùng của value nếu có trả về index của nó ngược lại return -1
let name1 = "Trịnh Trần Phương Tuấn";
let pos = name1.lastIndexOf(" ");

console.log("Tên của anh Jack là:" + name1.slice(pos, name1.length));

// split() tách chuỗi thành mảng
let name2 = "Đạt Zăn Tây";
let arr = name2.split(" "); // dấu hiệu cắt trong dấu () như vd thì cắt ngay khi gặp dấu phẩy (" ")

console.log(arr);
