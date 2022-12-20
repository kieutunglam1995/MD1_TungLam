function check() {
    let x = parseFloat(document.getElementById('cc').value)
    let y = parseFloat(document.getElementById('cn').value)
    let bmi = y / (x/100 * x/100);

if (bmi < 18){
document.getElementById('ketqua').innerHTML = "gay"
} else if (bmi < 25){
    document.getElementById('ketqua').innerHTML = ' bt'

} else if (bmi < 30){document.getElementById('ketqua').innerHTML = 'map'

}
}

