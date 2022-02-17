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
    document.getElementById('expanceTotal').innerText = expanceTotal;
    document.getElementById('remainingTotal').innerText = totalIncome - expanceTotal;

    // function for empty input values
    document.getElementById('foodInput').value = '';
    document.getElementById('rentInput').value = '';
    document.getElementById('clothsInput').value = '';

}

// add eventListner on button
document.getElementById('button').addEventListener('click', function () {
    expansesCalculation();
    console.log('button clicked');

});