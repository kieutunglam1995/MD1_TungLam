function bacanh() {
    let g1 = parseInt(document.getElementById('a').value)
    let g2 = parseInt(document.getElementById('b').value)
    let g3 = parseInt(document.getElementById('c').value)
    let x = g1*g1
    let y =g2*g2
    let  z =g3*g3


    if (g1>0 && g2>0 && g3>0 && g1 + g2 > g3 && g1 +g3 > g2 && g2 + g3 > g1 ){
        if (x + y == z || z +y == x || x + z ==y){
            document.getElementById('ketqua').innerHTML= "tam giac vuong"
        } else {
            document.getElementById('ketQua').innerHTML= "khong phai tam giac vuong"
        }

    } else {
        document.getElementById('ketQua').innerHTML= "khong phai tam giac vuong"
    }
}