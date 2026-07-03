function sumCalculator(){
    const n1 = document.getElementById('num1').value;
    const n2 = document.getElementById('num2').value;
<<<<<<< HEAD
    const n3 = document.getElementById('num3').value;

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);
    const number3 = parseFloat(n3);

    const sum = number1 + number2 + number3;
=======

    const number1 = parseFloat(n1);
    const number2 = parseFloat(n2);

    const sum = number1 + number2;
>>>>>>> 12b4851358204bcf455c910f81d15f11ef2d0cfe

    document.getElementById('res').textContent=sum;
}

function eraser(){
    document.getElementById('num1').value="";
    document.getElementById('num2').value="";
<<<<<<< HEAD
    document.getElementById('num3').value="";
=======
>>>>>>> 12b4851358204bcf455c910f81d15f11ef2d0cfe
    document.getElementById('res').textContent="Answer is shown here...";
}