// //bai1
// let a,b;
// a = + prompt("Nhập số a: ");
// b = + prompt("Nhập số b: ");
// if (a%b==0){
//     console.log("a chia hết cho b");
// } else {
//     console.log("a không chia hết cho b");
// }

// //bai2
// let age;
// age = + prompt ("Nhập vào tuổi: ");
// if (age<16){
//     console.log("Bạn không đủ tuổi vào lớp 10");
// }else{
//     console.log("Bạn đã đủ tuổi vào lớp 10");
// }

// //bai3
// let n = +prompt("Nhâp số nguyên n");
// if(n>0){
//     console.log("Số lớn hơn 0");
// }else {
//     console.log("số bé hơn 0");
// }

// //bai4
// let num1,num2, num3, maxNumber;
// num1 = +prompt("Nhập số 1: ");
// num2 = +prompt("Nhập số 2: ");
// num3 = +prompt("Nhập số 3: ");
// maxNumber = num1;
// if (num2 > maxNumber) {
//   maxNumber = num2;
// }
// if (num3 > maxNumber) {
//   maxNumber = num3;
// }
// console.log("Số lớn nhất là: "+ maxNumber);

// //bai5
// let diembkt, diemgk, diemck, diemtb;
// diembkt = +prompt("Nhập điểm bài kiểm tra: ");
// diemgk = +prompt("Nhập điểm thi giữa kì: ");
// diemck = +prompt("Nhập điểm thi cuối kì: ");
// diemtb = (diembkt + diemgk *2 + diemck*3)/6;
// if(diemtb>=8){
//     console.log("Học sinh có học lực giỏi");
// }else if(diemtb>=6.5){
//     console.log("Học sinh có học lực khá");
// }else if(diemtb>=5){
//     console.log("Học sinh có học lực trung bình");
// }else{
//     console.log("Học sinh có học lực kém");
// }

// //bai 6
// let hoahong, dso;
// dso = + prompt("Nhap doanh so: ");
// if(dso<=100){
//     hoahong = dso*5/100;
//     console.log("Tien hoa hong la: " + hoahong);
// }else if(dso<=200){
//     hoahong = dso*10/100;
//     console.log("Tien hoa hong la: " + hoahong);
// }else if(dso<=200){
//     hoahong = dso*20/100;
//     console.log("Tien hoa hong la: " + hoahong);
// }

// //bai7
// let sophut, phicodinh, tiencuoc;
// sophut = + prompt("So phut ma ban goi: ");
// phicodinh = 25000;
// tiencuoc = 0;
// if(sophut<50){
//     tiencuoc = phicodinh + sophut*600;
//     console.log("Tong tien cuoc cua ban la: " + tiencuoc);
// }else if(sophut < 200){
//     tiencuoc = phicodinh + (sophut-50 )*400 + (50*600);
//     console.log("Tong tien cuoc cua ban la: " + tiencuoc);
// }else{
//     tiencuoc = phicodinh + (sophut-200 )*200 +(150 *400) + (50*600);
//     console.log("Tong tien cuoc cua ban la: " + tiencuoc);
// }

// //bai1 chuyen do  C sang do F
// let C, F;
// C = + prompt("Nhap do C ma ban muon doi: ");
// F = C * 9/5 +32;
// console.log( C+ " do C = "+ F+" do F" );

// //bai2 chuyen tu met sang feet
// let m, ft;
// m= + prompt("Nhap met ma ban muon doi sang feet: ");
// ft = m *3.2808;
// console.log( m+ " met = "+ ft +" feet" );

// //bai3 tinh dien tich hinh vuong khi biet canh a
// let a,s;
// a = + prompt("Nhap canh cua hinh vuong: ");
// s = a*a;
// console.log("Dien tich hinh vuong la: "+ s);

// //bai4 tinh dien tich hinh chu nhat khi biet canh a,b
// let a,b,s;
// a = + prompt("Nhap canh a: ");
// b = + prompt("Nhap canh b: ");
// s = a*b;
// console.log("Dien tich hinh chu nhat la: "+ s);

// //bai5: tinh dien tich tam giac vuong khi biet 2 canh ke a,b
// let a,b,s;
// a = + prompt("Nhap canh 1: ");
// b = + prompt("Nhap canh 2");
// s = 1/2*a*b;
// console.log("Dien tich tam giac vuong la: "+ s);

// // //bai6 giai phuong trinh bac 1
// let a,b,x;
// a = + prompt("Nhap a: ");
// b = + prompt("Nhap b: ");
// if (a==0){
//     console.log("Phuong trinh vo nghiem");
// }else if(b==0){
//     console.log("Phuong trinh vo so nghiem");    
// }else {
//     x = -b/a;
//     console.log("Phuong trinh co nghiem: "+x);
// }

// //bai7 giai phuong trinh bac 2 (y = ax^2 + bx + c)
// let a,b,c,x,x1,x2,d;
// a = + prompt("Nhap a: ");
// b = + prompt("Nhap b: ");
// c = + prompt("Nhap c: ");
// if (a == 0) {
//     if (b == 0) {
//         console.log("Phuong trinh vo nghiem");
//     } else if (c == 0) {
//         console.log("Phuong trinh vo so nghiem");    
//     } else {
//         x = -c / b;
//         console.log("Phuong trinh co nghiem " + x);
//     }
// } else {
//     d = b * b - 4 * a * c;
//     if (d > 0) {
//         x1 = (-b - Math.sqrt(d)) / 2 * a;
//         x2 = (-b + Math.sqrt(d)) / 2 * a;
//         console.log("Phuong trinh co 2 nghiem phan biet x1=" + x1 + "  x2=" + x2);
//     } else if (d == 0) {
//         x = -b / 2 * a;
//         console.logv("Phuong trinh co 1 nghiem duy nhat x=" + x);
//     } else {
//         console.log("Phuong trinh vo nghiem")
//     }
// }

// //bai8 kiem tra xem mot so nhap vao co phai la tuoi 1 nguoi ko (0<tuoi<120)
// let tuoi;
// tuoi = + prompt ("Nhap vao so tuoi muon kiem tra: ");
// if(tuoi >0 && tuoi <120){
//     console.log(tuoi +" la tuoi cua mot nguoi");
// }else{
//     console.log(tuoi +" khong phai la tuoi cua mot nguoi");
// }

// //bai9 kiem tra 3 so thuc nhap vao co phai la 3 canh cua tam giac ko
// let a,b,c;
// a = + prompt("Nhap a: ");
// b = + prompt("Nhap b: ");
// c = + prompt("Nhap c: ");
// if(a <0 || b<0 || c<0){
//     console.log("Khong phai ba canh cua tam giac");
// }else{
//     if (a+b >c && b+c>a && a+c>b){
//         console.log("La ba canh cua tam giac");
//     }else{
//         console.log("Khong phai ba canh cua tam giac");
//     }
// }

//bai10 viet chuong trinh tinh gia dien
let kWh,gtien;
kWh = + prompt("Nhap so kWh: ");
if (kWh <= 50){
    gtien = kWh * 1.678;
    console.log("Gia dien la: " + gtien);
}else if(kWh <=100){
    gtien = (kWh - 50 )*1.734 + 50*1.678;
    console.log("Gia dien la: " + gtien);
}else if(kWh <=200){
    gtien = (kWh - 100 )*2.014 + 50* 1.734 + 50*1.678;
    console.log("Gia dien la: " + gtien);
}else if(kWh <=300){
    gtien = (kWh - 200 )* 2.536 + 100*2.014 + 50* 1.734 + 50*1.678;
    console.log("Gia dien la: " + gtien);
}else if(kWh <=400){
    gtien = (kWh - 300 )* 2.834 + 100 * 2.536 + 100*2.014 + 50* 1.734 + 50*1.678;
    console.log("Gia dien la: " + gtien);
}else{
    gtien = (kWh - 400 )*2.927 + 100 * 2.834 + 100 * 2.536 + 100*2.014 + 50* 1.734 + 50*1.678;
    console.log("Gia dien la: " + gtien);
}

// // bai11 Viet chuong trinh tinh thue thu nhap ca nhan
// function calculateIncomeTax(income) {
//     if (income <= 10000) {
//         return 0.1 * income;
//     } else if (income <= 50000) {
//         return 0.2 * income;
//     } else {
//         return 0.3 * income;
//     }
// }

// function main() {
//     const income = parseFloat(prompt("Nhập tổng thu nhập của bạn: "));
    
//     if (isNaN(income) || income < 0) {
//         console.log("Tổng thu nhập không hợp lệ.");
//         return;
//     }
    
//     const tax = calculateIncomeTax(income);
//     console.log(`Thuế cá nhân cần phải đóng: ${tax}`);
// }

// main();

// //bai12 Viet chuong trinh tinh lai
// let gocBanDau, laiSuatHangNam, soThangVay;
// gocBanDau = +prompt("Nhap so tien goc: ");
// laiSuatHangNam =+prompt("Nhap lai suat hang nam: ");
// soThangVay =+prompt("Nhap so thang vay; ");
// function tinhLaiKep(gocBanDau, laiSuatHangThang, soThang) {
//     const laiSuatHangThangTheoNam = laiSuatHangThang / 100 / 12;
//     const heSoLaiKe = Math.pow(1 + laiSuatHangThangTheoNam, soThang);

//     const tongSoTien = gocBanDau * heSoLaiKe;
//     const tienLaiThuDuoc = tongSoTien - gocBanDau;

//     return {
//         tongSoTien: tongSoTien,
//         tienLaiThuDuoc: tienLaiThuDuoc
//     };
// }
// const ketQua = tinhLaiKep(gocBanDau, laiSuatHangNam, soThangVay);
// console.log("Tiền lãi thu được:" + ketQua.tienLaiThuDuoc +"VND");
