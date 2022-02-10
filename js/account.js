const totalBalance = document.getElementById('total-balance');
function getInputvalue(id){
    const amountInput = document.getElementById(id);
    const amountText = amountInput.value;
    const amount = parseFloat(amountText);
    //clear input
    amountInput.value = '';
    return amount;
}


function setTotal(id, amount){
    const depositeTotal = document.getElementById(id);
        const previousTotalText = depositeTotal.innerText;
        const previousTotal = parseFloat(previousTotalText);
        depositeTotal.innerText = previousTotal + amount;
}



//total set balance
function setBalance(status, amount) {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    if (status == true) {
        totalBalance.innerText = previousTotalBalance + amount;
    } else {
        if (previousTotalBalance >= amount) {
            totalBalance.innerText = previousTotalBalance - amount;
        }else{
            return false;
        }
    }
    setStatementTable(status, amount, totalBalance.innerHTML);
    return true;
}


//set table statements
function setStatementTable(status, amount, totalBalance) {
    let color = "text-red-700";
    let statusText = "Withdraw";
    let amountSymbol = '-';
    if (status) {
        color = "text-green-700";
        statusText = "Deposite";
        amountSymbol = '+';
    }
    amount = amountSymbol + amount;
    //current time 
    const d = new Date();
    let time = d.toLocaleString();
    const tr = document.createElement('tr')
    tr.innerHTML = `
    <tr>
    <td class="px-6 py-4 whitespace-nowrap">
        <h5 class="text-sm font-medium ${color}">${amount}</h5>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <h5 class="text-sm text-gray-900">${totalBalance}</h5>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
        <h5 class="text-sm text-gray-900">${statusText}</h5>
    </td>
    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${time}</td>
    </tr>
        `
    const tableBody = document.getElementById('statement-table-body');
    tableBody.prepend(tr);
}

// Event Listener 
// depostie
document.getElementById('deposite-button').addEventListener('click', function (e) {
    //geting value
    const depositeAmount = getInputvalue('deposite-input');
    //set deposite total
    if (depositeAmount > 0) {
        setTotal('deposite-total', depositeAmount);
        setBalance(true, depositeAmount);
    }else{
        alert("invalid Input")
    }
})


//withdraw
document.getElementById('withdraw-button').addEventListener('click', function (e) {
   //geting value
    const withdrawAmount = getInputvalue('withdraw-input');
    //set withdraw total
    if (withdrawAmount > 0) {
        //set withdraw total
        const balanceStatus = setBalance(false, withdrawAmount)
        if (balanceStatus) {
        setTotal('withdraw-total', withdrawAmount);
        }else{
            alert("insufficient Balance")
        }
    }else{
        alert("invalid Input")
    }
});
