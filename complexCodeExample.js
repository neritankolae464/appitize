/**
 * Filename: complexCodeExample.js
 * Description: This code is a complex implementation that showcases a multi-step process for sorting, filtering, and manipulating data from an API response.
 */

// API response mock data
const apiResponse = [
  { id: 1, name: 'John', age: 25, city: 'New York' },
  { id: 2, name: 'Jane', age: 30, city: 'Los Angeles' },
  { id: 3, name: 'Steve', age: 40, city: 'San Francisco' },
  { id: 4, name: 'Laura', age: 35, city: 'Chicago' },
  { id: 5, name: 'David', age: 28, city: 'Miami' },
];

// Step 1: Sort the data by age in descending order
const sortedData = apiResponse.sort((a, b) => b.age - a.age);

// Step 2: Filter data for people aged 30 and above
const filteredData = sortedData.filter((person) => person.age >= 30);

// Step 3: Create a new array with only the names
const namesArray = filteredData.map((person) => person.name);

// Step 4: Convert the names into uppercase
const upperCaseNames = namesArray.map((name) => name.toUpperCase());

// Step 5: Calculate the average length of the names
const nameLengthSum = upperCaseNames.reduce(
  (total, name) => total + name.length,
  0
);
const nameAvgLength = nameLengthSum / upperCaseNames.length;

// Step 6: Print the final output
console.log('Filtered and processed data:');
console.log(upperCaseNames);
console.log('Average name length:', nameAvgLength);

// Step 7: Additional functionality (for demonstration purposes)
const youngestPerson = sortedData[sortedData.length - 1];
console.log('Youngest person:', youngestPerson);

// ... More code and complex logic can be added beyond this point

// Expected output:
// Filtered and processed data:
// [ 'JANE', 'LAURA', 'STEVE' ]
// Average name length: 4.666666666666667
// Youngest person: { id: 1, name: 'John', age: 25, city: 'New York' }