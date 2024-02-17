// Define the calculateTotal function
function calculateTotal(itemPrice, quantity, taxCallback) {
    let subtotal = itemPrice * quantity;

    // Call the provided callback function and pass the subtotal
    let tax = taxCallback(subtotal);

    // Calculate the total by adding the subtotal and tax
    let total = subtotal + tax;

    // Return the total
    return total;
}

// Call the calculateTotal function with the parameters 50 and 2, and an inline callback function
let temp = calculateTotal(10, 2, function(subtotal) {
    let taxRate = 0.05;
    let tax = subtotal * taxRate;
    return tax;
});

// Output or make use of the result as needed
console.log(temp);
