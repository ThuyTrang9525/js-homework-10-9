productId = 1;
total = 0;

function sellProduct() {
    const pname = document.getElementById("pname").value;
    const qty = document.getElementById("qty").value;
    const up = document.getElementById("up").value;
    const dc = document.getElementById("dc").value;

    if (!pname || isNaN(qty) || isNaN(up) || isNaN(dc)) {
        alert("Please enter valid values for all fields.");
        return;
    }

    const subtotal = qty * up * (1 - dc / 100);
    total += subtotal;  

  
    const tableBody = document.querySelector("#productTable tbody");

    
    const row = tableBody.insertRow();

    row.insertCell(0).innerHTML = productId++;
    row.insertCell(1).innerHTML = pname;
    row.insertCell(2).innerHTML = qty;
    row.insertCell(3).innerHTML = `$${up}`;
    row.insertCell(4).innerHTML = `${dc}%`;
    row.insertCell(5).innerHTML = `$${subtotal.toFixed(2)}`;


    document.getElementById("total").innerHTML = `$${total.toFixed(2)}`;

    
    clearForm();
}

function clearForm() {
    document.getElementById("pname").value = "";
    document.getElementById("qty").value = "";
    document.getElementById("up").value = "";
    document.getElementById("dc").value = "";
}