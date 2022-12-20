function nam() {
    let n = parseInt(document.getElementById('N').value);
    if (n%4 == 0) {
        if (n%100 == 0){
            if (n%400 == 0){
                window.alert('Day la nam nhuan')
            } else {
                window.alert('Day khong phai nam nhuan')
            }
        } else {
            window.alert("Day la nam nhuan")
        }
    } else {
        window.alert('Day khong phai nam nhuan')
    }
}