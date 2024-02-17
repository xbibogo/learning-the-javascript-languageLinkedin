//a JavaScript function that takes an input n and returns an array containing the first n numbers in the Fibonacci sequence:

function fibonacciArray(n) {
    if (n <= 0) {
      return [];
    } else if (n === 1) {
      return [0];
    } else if (n === 2) {
      return [0, 1];
    } else {
      const fibArray = [0, 1];
      for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 1] + fibArray[i - 2];
      }
      return fibArray;
    }
  }
  
    
  

function testFibonacciArray() {
    // Test Case 1
    const result1 = fibonacciArray(0);
    console.log(result1); // Output: []
  
    // Test Case 2
    const result2 = fibonacciArray(1);
    console.log(result2); // Output: [0]
  
    // Test Case 3
    const result3 = fibonacciArray(5);
    console.log(result3); // Output: [0, 1, 1, 2, 3]
  
    // Test Case 4
    const result4 = fibonacciArray(8);
    console.log(result4); // Output: [0, 1, 1, 2, 3, 5, 8, 13]
  
    // Test Case 5
    const result5 = fibonacciArray(12);
    console.log(result5); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
  }
  
  // Run the test cases
  testFibonacciArray();
  