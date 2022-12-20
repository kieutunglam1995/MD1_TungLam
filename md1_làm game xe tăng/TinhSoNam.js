function nhapsongay(){
    let x = parseInt(document.getElementById('songay').value)
switch (x) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        document.write("Day la thang co 31 ngay")
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        document.write("day la thang co 30 ngay")
        break;
    case 2:
        document.write("day la thang cos 28 hoac 29 ngay")
        break;
}



}