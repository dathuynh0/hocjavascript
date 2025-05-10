// dùng toán tử 3 ngôi nhập vào số điểm và xuất ra học lực của học sinh

let score = parseFloat(prompt("Nhập vào điểm trung bình: "));

// biến nhận giá trị
let hocLuc =
  score >= 8
    ? "Giỏi"
    : score < 8 && score >= 6.5
    ? "Khá"
    : score < 6.5 && score >= 5
    ? "Trung bình"
    : score < 5 && score >= 3.5
    ? "Yếu"
    : "Kém";
console.log(hocLuc);

// Function Expression
let tich = function (a, b) {
  return a * b;
};

console.log(tich(3, 4));

// ArrowFunction
let sum = (a, b) => a + b;

console.log(sum(4, 5));

// ArrowFunction rắc rối hơn
let sumProduct = (a, b) => {
  tong = a + b;
  product = a * b;
  return tong + product;
};

console.log(sumProduct(3, 5));

// dùng hàm và in ra kết quả của n!
let giaiThua = function (n) {
  gT = 1;
  for (i = 1; i <= n; i++) {
    gT *= i;
  }
  return gT;
};

let n = parseInt(prompt("Nhập vào số n: "));

console.log("Giai thừa của " + n + " là " + giaiThua(n));
