//tinh chu vi hinh tron C = 2 * PI * r
// dien tich hinh tron S = PI * r^2
let C, S;
let PI = Math.PI;
let r = Number(prompt("Nhập vào bán kính của hình tròn: "));
console.log(typeof r);

//Chu vi
C = 2 * PI * r;
alert("Chu vi của hình tròn có bán kính = " + r + " là: " + C);

//dien tich
S = PI * Math.pow(r, 2);
alert("Diện tích của hình tròn có bán kính = " + r + " là: " + S);

// tính điểm trung bình của 1 hs
let toan = Number(prompt("Nhập vào điểm toán: "));
let van = Number(prompt("Nhập vào điểm văn: "));
let english = Number(prompt("Nhập vào điểm tiếng anh: "));

//khai báo biến điểm trung bình (dTB)
let dTB = (toan + van + english) / 3;
alert("Điểm trung bình của bạn là: " + dTB.toFixed(2));

//Xếp loại học lực
if (dTB < 5) {
  alert("Học lực yếu");
} else if (dTB > 5 && dTB < 8) {
  alert("Học lực khá");
} else {
  alert("Học lực giỏi. Good!");
}
