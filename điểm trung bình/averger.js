function diemTrungBinh(){
    let diemToan=+document.getElementById("anh lam").value;
    let diemLy=+document.getElementById("anh lam1").value;
    let diemHoa=+document.getElementById("anhlam2").value;
    let dtb = (diemHoa + diemToan + diemLy)/3
    document.getElementById("ketQua").innerHTML="Diem Trung Binh la: "+dtb

}