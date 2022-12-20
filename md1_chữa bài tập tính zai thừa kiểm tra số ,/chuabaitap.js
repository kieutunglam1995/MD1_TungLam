// function bai1() {
//     let pi = 3.14;
//     let banKinh = parseInt(prompt('nhap so'));
//     let dienTich = banKinh * banKinh * pi;
//     let chuvi = banKinh * 2 * pi;
//     alert('dientichla:' + dienTich + 'chu vi la:' + chuvi);
// }
// function bai2(){
//     let giaTriBinhPhuong = parseInt(prompt('binh phuong la'));
//     let number = giaTriBinhPhuong * giaTriBinhPhuong ;
//     alert('ket qua la :' + number)
// }
// function bai3() {
//     let tinhzaithua = parseInt(prompt('tinhzaithua'));
//     let bienso = 1;
//     for (let i = 1; i <= tinhzaithua; i++) {
//         bienso = bienso * i;
//     }
// alert(bienso)
//
// }
// function bai4() {
// let x =[1,2,3,4,5,6,7,8];
// let nhap = +prompt('nhap');
// if (x.includes(nhap)){
//     alert('true')
// }else { alert('false')
//
// }
// }
// function bai5() {
//     let soNguyen = [1,2,3,4,5,-1,-2];
//     let soNhoNhat = Math.min.apply(Math,soNguyen);
//     document.write(soNhoNhat)
//
//
// }bai5()
//
// function bai6() {
//     let nhap = +prompt('nhap so');
//     if (nhap > 0 ){
//         alert('so nguyen duong')
//     }else {alert('so nguyen am')}
//
//
//
// }bai6()
// function bai7() {
//
//
//     let x =[1,2,3,4,5];
//    x.splice(2,2, 8 ,9);
//    alert(x)
// }bai7()
function bai8() {
    let nhap = +prompt('nhap');
    let x =[1,2,3,4,5,6];
if (x.includes(nhap)){
    alert(x.indexOf(nhap))
}else {alert('-1')}

}
