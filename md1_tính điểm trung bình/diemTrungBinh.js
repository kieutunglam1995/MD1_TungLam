// function DTB(){
//     let toan= + document.getElementById(id="diemToan").value;
//     let ly= + document.getElementById(id="diemLy").value;
//     let hoa= + document.getElementById(id="diemHoa").value;
//     let DTB = (toan + ly + hoa)/3
//     document.getElementById(id="ketqua").innerHTML="điểm trung bình là:" + DTB
// }
//
// function doC() {
//     let doC = +document.getElementById(id = "doC").value;
//     let doF = parseInt(doC) / 5 * 9 + 32;
//     document.getElementById(id="kq").innerHTML ="kết quả"+doF
// }
// function tinhToan(){
//     let bk = + document.getElementById(id="banKinh").value;
//     let dt = (bk * bk * 3.14 );
//     let cv = (bk * 2 * 3.14 );
//     document.getElementById(id="p").innerHTML="kết quả diện tích " + dt + " kết quả chu vi " +cv;
// }
function DTB(){
    let toan = + document.getElementById(id="diemToan").value
    let ly = + document.getElementById(id="diemLy").value
    let hoa = + document.getElementById(id="diemHoa").value
    let dtb = (toan + ly + hoa)/3
    document.getElementById(id="diemTrungBinh").innerHTML="ket qua cua ban la:" + dtb

}
function nhietDo(){
    let doc = + document.getElementById(id="doC").value;
    let doF = parseInt(doc) / 5 * 9 + 32;
    document.getElementById(id="doF").innerHTML="nhiet do f la:" + doF
}