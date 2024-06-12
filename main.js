const path = require('path');

// Ensure the script is called with the correct number of arguments
if (process.argv.length !== 4) {
  console.error('Usage: node app.js <pathSegment1> <pathSegment2>');
  process.exit(1);
}

// Get the file path segments from command-line arguments
const pathSegment1 = process.argv[2];
const pathSegment2 = process.argv[3];

// Join the path segments
const joinedPath = path.join(pathSegment1, pathSegment2);

// Print the joined path to the console
console.log(joinedPath);