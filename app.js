
const form = document.getElementById("T-form");
const table = document.getElementById("tab");
const tbody = document.getElementsByTagName("tbody")[0];
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let product = document.getElementById("productName").value;
    let price = document.getElementById("productPrice").value;
    let description = document.getElementById("productDescription").value;

    const newTr = table.insertRow();
    const pNameCell = newTr.insertCell(0);
    const pPriceCell = newTr.insertCell(1);
    const pDescrCell = newTr.insertCell(2);

    tbody.appendChild(newTr);
    newTr.appendChild(pDescrCell,pPriceCell,pNameCell);

    pNameCell.textContent = product ;
    pPriceCell.textContent = price;
    pDescrCell.textContent = description;

 });
