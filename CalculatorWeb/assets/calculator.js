const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
  };

function updateDisplay(){
    document.querySelector('.displayNumber').innerText = calculator.displayNumber
}

function clearCalculator(){
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.isWaitForSecondNumber = null;
}

function inputDigit(digit){
    if(calculator.displayNumber === '0'){
        calculator.displayNumber = digit;
    }else{
        calculator.displayNumber += digit;
    }
}

const buttons = document.querySelectorAll('.button');

for(const button of buttons){
    button.addEventListener('click', function(event){
        const target = event.target;

    if(target.classList.contains('clear')){
        clearCalculator();
        updateDisplay();
        return;
    }

    if(target.classList.contains('negative')){
        inverseNumber();
        updateDisplay();
        return;
    }

    if(target.classList.contains('equals')){
        performeCalculator();
        updateDisplay();
        return;
    }

    if(target.classList.contains('operator')){
        handleOperator(target.innerText);
        return;
    }
        
    
    inputDigit(target.innerText);
    updateDisplay();
    })

}

function inverseNumber(){
    if(calculator.displayNumber === '0'){
        return;
    }

    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
      calculator.operator = operator;
      calculator.isWaitForSecondNumber = true;
      calculator.firstNumber = calculator.displayNumber;
   
      // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
      calculator.displayNumber = '0';
    } else {
      alert('Operator sudah ditetapkan');
    }
  }

function performeCalculator(){
    if(calculator.firstNumber == null || calculator.operator == null){
        alert('you dont have input the first number and operator yet');
        return;
    }

    let result = 0;
    if (calculator.operator === '+'){
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
    }else{
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber);
    }

    calculator.displayNumber = result;

}

