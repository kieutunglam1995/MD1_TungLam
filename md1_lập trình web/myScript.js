let product = [];
let productName = document.getElementById('InputBox');
let Add_product_button = document.getElementById('AddButton');
Add_product_button.addEventListener("click", function () {
    product.push(productName.value)
    table(product);
})

function table(arr) {
    let a = "" ;
    a = a + "<table>"
    for (let i = 0; i <arr.length ; i++) {
       // a = a + "<tr>" + "<td>" + arr[i] +"</td>" + "<td>" + "<button>" + "Edit" + "</button>" + "</td>" + "<td>" +
       //     "<button>" + "Delete" + "</button>" + "</td>" + "</tr>"
        a = a  + `<tr>
                    <td>${arr[i]}</td>
                    <td><button class="btn" onclick="EDIT(${i})">Edit</button></td>
                    <td><button class="btn" onclick="DELETE(${i})">Delete</button></td>
                </tr>`

    } a = a + "</table>"
    document.getElementById('TableContainer').innerHTML = a ;
    document.getElementById('right').innerHTML = arr.length + " products";
}

function DELETE(id) {
    product.splice(id,1)
    table(product);
}
function EDIT(id) {
    let Edit = prompt('chinh sua');
    product[id] = Edit;
    table(product);
}