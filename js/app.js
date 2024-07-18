const form = document.getElementById("T-form");
const table = document.getElementById("tab");
const tbody = getElementsByTagName("tbody")[0];


form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let product = e.getElementById("productName").value;
    let price = e.getElementById("productPrice").value;
    let description = e.getElementById("productDescription").value;

    const newTr = table.insertRow();
    const pNameCell = newTr.insertCell(0);
    const pPriceCell = newTr.insertCell(1);
    const pDescrCell = newTr.insertCell(2);

    tbody.appendChild(newTr);
    newTr.appendChild(pNameCell,pPriceCell,pDescrCell);

    pNameCell.textContent = product ;
    pPriceCell.textContent = price;
    pDescrCell.textContent = description;

 });