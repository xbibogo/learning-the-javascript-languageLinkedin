// BMI Calculator Function
function calculateBMI(weight, height) {
    // Ensure non-negative values
    if (weight <= 0 || height <= 0) {
      return "Invalid input. Weight and height must be positive values.";
    }
  
    // Calculate BMI
    const bmi = weight / (height * height);
  
    // Classify BMI category
    let category;
    if (bmi < 18.5) {
      category = "Underweight";
    } else if (bmi < 25) {
      category = "Normal weight";
    } else if (bmi < 30) {
      category = "Overweight";
    } else {
      category = "Obese";
    }
  
    return `BMI: ${bmi.toFixed(2)} - ${category}`;
  }
  
  // Test Cases
  console.log(calculateBMI(70, 1.75)); // Normal weight
  console.log(calculateBMI(55, 1.6));  // Underweight
  console.log(calculateBMI(80, 1.8));  // Overweight
  console.log(calculateBMI(90, 1.65)); // Overweight
  console.log(calculateBMI(100, 1.7)); // Obese
  