function calculation(num1,num2,num3){
    const foodExpance=document.getElementById('foodInput');
    let foodExpanceValue = foodExpance.value;
    foodExpance.value = parseFloat(foodExpanceValue);

    const rentExpance=document.getElementById('rentInput');
    let rentExpanceValue = rentExpance.value;
    rentExpance.value = parseFloat(rentExpanceValue);

    const clothsExpance=document.getElementById('clothsInput');
    let clothsExpanceValue = clothsExpance.value;
    clothsExpance.value = parseFloat(clothsExpanceValue);
}
document.getElementById('button').addEventListener('click', function(){

});