productId = 1;
total = 0;

function sellProduct() {
    const pname = document.getElementById("pname").value;
    const qty = document.getElementById("qty").value;
    const dc = document.getElementById("dc").value;

    if (!pname || isNaN(qty) || isNaN(up) || isNaN(dc)) {
        alert("Please enter valid values for all fields.");
        return;
    }

    total += subtotal;  

  
    const tableBody = document.querySelector("#productTable tbody");

    
    const row = tableBody.insertRow();

    row.insertCell(0).innerHTML = productId++;
    row.insertCell(1).innerHTML = pname;
    row.insertCell(2).innerHTML = qty;
    row.insertCell(3).innerHTML = `${dc}%`;
    row.insertCell(4).innerHTML = `$${subtotal.toFixed(2)}`;


    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;

    
    clearForm();
}

function clearForm() {
    document.getElementById("pname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("dc").value = "";
}