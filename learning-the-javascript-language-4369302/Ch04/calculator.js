// Calculator function
 

//rightclick the folder name to run the code in the terminal
function calculator(operation, num1, num2) {
    switch (operation) {
        case 'add':
            return num1 + num2;
        case 'subtract':
            return num1 - num2;
        case 'multiply':
            return num1 * num2;
        case 'divide':
            // Check for division by zero
            return num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        default:
            return 'Invalid operation';
    }
}

// Test cases
console.log('Test Case 1 (Addition):', calculator('add', 5, 3));        // Expected output: 8
console.log('Test Case 2 (Subtraction):', calculator('subtract', 10, 4)); // Expected output: 6
console.log('Test Case 3 (Multiplication):', calculator('multiply', 2, 6)); // Expected output: 12
console.log('Test Case 4 (Division):', calculator('divide', 8, 2));       // Expected output: 4
console.log('Test Case 5 (Division by Zero):', calculator('divide', 6, 0)); // Expected output: Cannot divide by zero
