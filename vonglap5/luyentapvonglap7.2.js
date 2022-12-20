function bai1() {
    for (let i = 1; i < 100 ; i++) {
    document.write(i + "<br>")
    if (i == 99){
        alert(" đã hoàn thành")
    }
}

}
function bai2() {
    let nhietdo = parseInt( prompt('nhập số'));
if (nhietdo > 100 ){
    alert('giảm nhiệt độ')
}else if (nhietdo < 20 ){
    alert('tăng nhiệt dộ')

}
}
function bai3() {
    let a = 0
let  b = 1
    let c
    for (let i = 0; i < 20; i++) {
        document.write(a + ' <br>')
       c = a +b ;
        a = b;
        b = c;
    }
}
function bai4() {
    let a = 0;
    let b = 1;
    let c;
    let d = true
    while (d){
        c = a +b;
        a = b;
        b = c
        if ( a % 5 == 0 ){
            alert(a)
            d = false;
        }
    }


}
function bai5() {
    let  a =0;
    let b =1;
    let c ;
    let total = 0;
    for (let i = 0; i < 20; i++) {
        c = a + b;
        a = b;
        b = c ;
        total = total + a


    }alert(total)

}
function bai6() {
    let  a = 1 ;
    let b = 0 ;
    let total = 0;
    while ( b <= 30 ){
      a++;
      if ( a % 7 == 0 ){
          total = total + a
          b++;
      }
    }alert(total)

}
function bai7() {
    // let nhap = +prompt('')
    for (let i = 1; i <= 100 ; i++) {
       if (i % 3 == 0){
          document.write('fizz')

       }else if (i % 5 == 0){
           document.write('buzz')
       }else if (i % 3 == 0 && i % 5 ==0){
           document.write('fizzbuzz')

       }else {document.write(i)}
    }

}
function bai9() {
    let a =0;
    let b=1;
    let c;
    for (let i = 0; i < 10 ; i++) {
        document.write(a + '<br>')
        c = a + b;
        a = b;
        b = c;
    }

}
function bai10() {
    let tatol = 1;
    for (let i = 1; i <5 ; i++) {
        tatol= tatol * i;
        document.write(tatol)
    }

}
// function bai11() {
//     let a ='';
//     let  b ='';
//     for (let i = 6; 0 < i  ; i--) {
//         b = a + '*' ;
//         a = a + '*';
//         document.write(b + '<br>')
//
//     }
//
// }
function bai11() {
    for (let i = 0; i <6 ; i++) {
        for (let j = 0; j < i ; j++) {
            document.write('*')

        }document.write('<br>')

    }

}
function bai12() {
    for (let i = 6; i >0 ; i--) {
        for (let j = 0; j < i ; j++) {
            document.write('*')

        }document.write('<br>')

    }

}
function bai13() {
    let d = true;
    let c = 2;
    // let c = Math.floor(Math.random() * 10);
while (d ){
    let num =parseInt(prompt(''))
    if (c == num){
        alert('youwin')
        d = false;
    }
}
}