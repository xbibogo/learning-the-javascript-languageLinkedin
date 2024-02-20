function checkLicensePlate(plate) {
    // Check if the plate has a valid length
    if (plate.length !== 7) {
      return "Invalid license plate length";
    }
  
    // Extract the first two letters and the remaining five numbers
    const letters = plate.slice(0, 2);
    const numbers = plate.slice(2);
  
    // Check if the first two characters are alphabets
    if (!/^[A-Za-z]+$/.test(letters)) {
      return "Invalid first two characters, should be alphabets";
    }
  
    // Check if the remaining five characters are numbers
    if (!/^\d{5}$/.test(numbers)) {
      return "Invalid last five characters, should be numbers";
    }
  
    // If all checks pass, the license plate is valid
    return "Valid license plate";
  }
  
  // Example usage:
  const licensePlate1 = "AB12345";
  const licensePlate2 = "12XYZ78";
  
  console.log(checkLicensePlate(licensePlate1)); // Output: Valid license plate
  console.log(checkLicensePlate(licensePlate2)); // Output: Invalid first two characters, should be alphabets
  