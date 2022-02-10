
const totalBalance = document.getElementById('total-balance');

// depostie
document.getElementById('deposite-button').addEventListener('click', function(e){
    const depositeAmountInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeAmountInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    if(!isNaN(depositeAmount) && depositeAmountInput.value != ''){
        const depositeTotal = document.getElementById('deposite-total');
        
        const previousDepositeTotalText = depositeTotal.innerText;
        console.log(previousDepositeTotalText)
        const previousDepositeTotal = parseFloat(previousDepositeTotalText);
        
        depositeTotal.innerText = previousDepositeTotal + depositeAmount;
        console.log(depositeAmount,previousDepositeTotal)
    }

    setBalance(true,depositeAmount)

    // console.log(depositeAmountText)
})

//withdraw


function setBalance(status, amount){
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance= parseFloat(totalBalanceText);
    if(status == true){
        totalBalance.innerText = amount + previousTotalBalance;
    }

    setStatementTable(status,amount,totalBalance.innerHTML);
}

function setStatementTable(status,amount,totalBalance){

    
    let color = "text-red-700";
    let statusText = "Widthdraw";
    let amountSymbol = '-';
    if(status){
        
     color = "text-green-700";
     statusText = "Deposite";
     amountSymbol = '+';

    }
        
    amount = amountSymbol+amount;
    
    

    const d = new Date();
    let time = d.toLocaleString();
    // console.log(time);

    const tr= document.createElement('tr')
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

    tableBody.appendChild(tr);

}