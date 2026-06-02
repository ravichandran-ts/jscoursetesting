
function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
        let result = multiply(num1, num2);
        // Display the result
        displayResult(result);
        let resultA = add(num1, num2);
        // Display the resultA
        displayResultA(resultA);
        let resultB = subtract(num1, num2);
        // Display the resultB
        displayResultB(resultB);

    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function add(a, b) {
    // Introduce a debugger statement to pause execution
//    debugger;

    // Add the numbers
    return a + b;
}

function subtract(a, b) {
    // Introduce a debugger statement to pause execution
//    debugger;

    // Subtract the numbers
    return a - b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result of multiplication is: ${result}`;
}

function displayResultA(resultA) {
    // Display the resultA in the paragraph element
    const resultElementA = document.getElementById('resultA');
    resultElementA.textContent = `The result of addition is: ${resultA}`;
}

function displayResultB(resultB) {
    // Display the resultB in the paragraph element
    const resultElementB = document.getElementById('resultB');
    resultElementB.textContent = `The result of subtraction is: ${resultB}`;
}
