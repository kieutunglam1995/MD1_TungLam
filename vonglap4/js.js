// let bang ="<table border='1' cellpadding='0' cellspacing='5'>"
// for (let i = 1; i < 10 ; i++) {
//     bang = bang + "<tr>"
//     for (let j = 1; j < 10 ; j++) {
//         bang =  bang +"<td>" + i + "x" + j + "=" + i * j + "</td>";
//
//     }
// bang = bang + "</tr>"
// } bang = bang + "</table>"
// document.write(bang)



let  bang = "<table border='1' cellspacing='1' cellpadding='5'>"
for (let i = 1; i <10 ; i++) {
    bang = bang + "<tr>";
    for (let j = 1; j < 10 ; j++) {
        bang = bang + "<td>" + i +"x"+j+"="+ i*j +"</td>>";
    } bang = bang + "</tr>";
}bang = bang + "</table>";
document.write(bang)