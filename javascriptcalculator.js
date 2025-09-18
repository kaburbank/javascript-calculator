// Implement an empty array to store the history of calculations
const calcHistory = []

// Implement a function that will add two numbers, store the calculation history, and return the result
function add(a,b) {
    let x = a + b;
    let addHistory= { operands: [a, b], operator: '+', result: x };
    calcHistory.push(addHistory);
    return x;
};

// Implement a function that will subtract two numbers, store the calculation history, and return the result
function subtract(a,b) {
    let x = a - b;
    let subtractHistory= { operands: [a, b], operator: '-', result: x  }
    calcHistory.push(subtractHistory);
    return x;
};

// Implement a function that will multiply two numbers, store the calculation history, and return the result
function multiply(a,b) {
    let x = a * b;
    let multiplyHistory= { operands: [a, b], operator: '*', result: x }
    calcHistory.push(multiplyHistory);
    return x;
};

// Implement a function that will divide two numbers, store the calculation history, and return the result
function divide(a,b) {
    let x = a / b;
    let divideHistory= { operands: [a, b], operator: '/', result: x }
    calcHistory.push(divideHistory);
    return x;
};

// A function to display the calculation history or inform the user that they have no stored calculations
function historyDisplay() {
    if(calcHistory.length === 0){
        console.log('no stored calculations')}
    else{
        console.log(calcHistory)
    }
};
