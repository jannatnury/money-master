function getExpanses(sector) {

    const sectorInput = document.getElementById(sector + 'Input').value;
    let sectorExpance = parseFloat(sectorInput);
    return sectorExpance;
}
function expansesCalculation() {
    const totalIncome = getExpanses('income');
    const foodExpance = getExpanses('food');
    const rentExpance = getExpanses('rent');
    const clothsExpance = getExpanses('cloths');
    const expanceTotal = foodExpance + rentExpance + clothsExpance;
    const lastBalance = totalIncome - expanceTotal;
    // Total Expance
    document.getElementById('expanceTotal').innerText = expanceTotal;

    // function for empty input values
    document.getElementById('foodInput').value = '';
    document.getElementById('rentInput').value = '';
    document.getElementById('clothsInput').value = '';
    // Erroe message
    if (isNaN(totalIncome) || totalIncome < 0 || isNaN(foodExpance) || foodExpance < 0 || isNaN(rentExpance) || rentExpance < 0 || isNaN(clothsExpance) || clothsExpance < 0 || isNaN(lastBalance) || lastBalance > totalIncome) {
        document.getElementById('expanceTotal').innerText = "Invalid Input !";
        document.getElementById('remainingTotal').innerText = "Invalid Input !";
    }
    if (expanceTotal > totalIncome) {
        document.getElementById('expanceTotal').innerText = "You can't expanse more than income!";
        document.getElementById('remainingTotal').innerText = "Enter a valid input !";
    }
    else {
        // Remaining Balance
        document.getElementById('remainingTotal').innerText = lastBalance;
        return lastBalance;
    }


}
// function for Savings button
function savingsCalculation() {
    const savingsParcent = document.getElementById('savingInput').value;
    const totalSavings = (getExpanses('income') * savingsParcent) / 100;
    // Total savings
    if (totalSavings > 0)
        document.getElementById('savingAmount').innerText = totalSavings;
    document.getElementById('remainingBalance').innerText = expansesCalculation() - totalSavings;
}


// add eventListner on calculation button
document.getElementById('button').addEventListener('click', function () {
    expansesCalculation();
});

// add eventListener on Save button
document.getElementById('button-2').addEventListener('click', function () {
    savingsCalculation();
})
