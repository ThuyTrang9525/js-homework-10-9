var no = 0;
var total = 0;
function add(){
    no ++;
    var pname = document.getElementById("pname").value;
    var qty =  parseFloat(document.getElementById("qty").value);
    var pp = parseFloat(document.getElementById("pp").value);
    var subTotal = pp * qty;
    total += subTotal
    var row = "<tr class='newrow'>";
    row += "<td>" + no + "</td>";
    row += "<td>" + pname + "</td>";
    row += "<td>" + qty + "</td>";
    row += "<td>" + pp + "</td>";
    row += "<td>" + subTotal + "</td>";
    row += "</tr>";
    var tb = document.getElementById("p-table");
    tb.innerHTML += row;
    var trow = document.getElementById("r-total");
    var row = document.getElementsByClassName('row')[row.length-1];
    tb.insertBefore(trow, row);
    document.getElementById("total").innerHTML = total ;
}
