let count = 0;
let fakeInput = ["T", "ô", "i", " ", "L", "à", " ", "M", "ộ", "t", " ", "K", "ẻ"," ", "N", "g", "ố", "c"]
let textArea = document.getElementById('inputArea')
let text = "";
textArea.addEventListener("inptu",function () {
    text += fakeInput[count]
    textArea.value = text;
    count++
    if (textArea.value.length > 18){
        textArea.value = "";
        count = 0;
        text = '';
    }
})
