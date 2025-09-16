// Define function variables
let a;
let b;
let x = a + b;
let c;
let d;
let y = c - d;
let e;
let f;
let z = e * f;
let g;
let h;
let w = g / h;

// Implement a function that will add and return the result.
function add(a,b) {
    let x = a + b;
    return x;
};

// Implement a function that will subtract and return the result.
function subtract(c,d) {
    let y = c - d;
    return y;
};

// Implement a function that will multiply and return the result.
function multiply(e,f) {
    let z = e * f;
    return z;
};

// Implement a function that will divide return the result.
function divide(g,h) {
    let w = g / h;
    return w;
};

// Implement an empty array to store the history of calculations
const calcHistory = []

// Declare calculation objects which should contain: Operands (2 numbers), Operator (+,-,*,/), Result of the calculation
let addHistory= { operator: '+', operands: [a, b], result: x }
let subtractHistory= { operator: '-', operands: [c, d], result: y }
let multiplyHistory= { operator: '*', operands: [e, f], result: z }
let divideHistory= { operator: '/', operands: [g, h], result: w }


// A function to add to the history and be used in all of the simple operation functions
calcHistory.push(addHistory, subtractHistory, multiplyHistory, divideHistory)

// A function to display the history or inform the user that they have no stored calculations

function displayHistory(){
    console.log(calcHistory)
    if(calcHistory){
        let result = calcHistory;
        result = undefined;
        return 'empty';
    }
}
