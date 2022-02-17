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
    // Total Expance
    document.getElementById('expanceTotal').innerText = expanceTotal;
    // Remaining Balance
    document.getElementById('remainingTotal').innerText = totalIncome - expanceTotal;
    // savings of total income
    document.getElementById('')

    // function for empty input values
    document.getElementById('foodInput').value = '';
    document.getElementById('rentInput').value = '';
    document.getElementById('clothsInput').value = '';
    // Erroe message
    if( isNaN(totalIncome) || totalIncome<0 || isNaN(foodExpance) || foodExpance<0 || isNaN(rentExpance) || rentExpance<0 || isNaN(clothsExpance) || clothsExpance<0){
        document.getElementById('expanceTotal').innerText = "Invalid Input !";
        document.getElementById('remainingTotal').innerText = "Invalid Input !";
    }

}
// function for Savings button
function savingsCalculation() {
    const savingsParcent = document.getElementById('savingInput').value;
    const totalSavings = (totalIncome * savingsParcent) / 100;

    // Total savings
    document.getElementById('savingAmount').innerText = totalSavings;
}

// add eventListner on calculation button
document.getElementById('button').addEventListener('click', function () {
    expansesCalculation();
});
// add eventListener on Save button
document.getElementById('button-2').addEventListener('click', function () {
    savingsCalculation();
})
