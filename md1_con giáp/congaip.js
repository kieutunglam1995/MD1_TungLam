function congiap(){
    let c = +document.getElementById("ns").value;
        let x = c%10
    console.log(x)
    let y = c%12
    let chi
    let can
    switch (x){
        case 0:
            can = 'canh'
            break;
        case 1:
            can = 'than'
            break;
        case 2:
            can = 'nham'
            break;
        case 3:
            can = 'quy'
            break;
        case 4:
            can = 'giap'
            break;
        case 5:
            can = 'at'
            break;
        case 6:
            can = 'mèo'
            break;
        case 7:
            can = 'dinh'
            break;
        case 8:
            can = 'mau'
            break;
        case 9:
            can = 'ky'

    }
    switch (y){
        case 0:
           chi = 'than'
            break;
        case 1:
           chi = 'dau'
            break;
        case 2:
           chi = 'tuat'
            break;
        case 3:
           chi = 'hoi'
            break;
        case 4:
           chi = 'điên'
            break;
        case 5:
           chi = 'suy'
            break;
        case 6:
           chi = 'dan'
            break;
        case 7:
           chi = 'mao'
            break;
        case 8:
           chi = 'thin'
            break;
        case 9:
           chi = 'ty'
            break;
           case 10:
           chi = 'ngo'
            break;
        case 11:
           chi = 'mui'
            break;

    }
    alert( can +" "+chi )
}