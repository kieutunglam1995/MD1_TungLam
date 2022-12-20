function bienacongb(){
    let a = parseInt(document.getElementById('biena').value)
    let b = parseInt(document.getElementById('bienb').value)
    let x = -b / a

//     if(a==0 && b==0){phuong trinh vo so nghiem
//
//     }else if (a==0 && b<=0){ vo nghiem
//     }else if (a >= 0){co nghiem duy nhat}
//     document.getElementById('ketqua').innerHTML = x
// }
if (a==0 && b==0){
    document.getElementById('ketqua').innerHTML = x + " " + 'vo so nghiem'
}else if (a==0 && b<=0){
    document.getElementById('ketqua').innerHTML= x + " " + 'vo nghiem'
}else if (a >= 0 ){
    document.getElementById('ketqua').innerHTML= x + " " + 'nghiem duy nhat'
}
}