const path = require('path');

// Function to join two file path segments
function joinPaths(segment1, segment2) {
  return path.join(segment1, segment2);
}

// Get the command-line arguments
const [, , segment1, segment2] = process.argv;

// Check if both segments are provided
if (segment1 && segment2) {
  const joinedPath = joinPaths(segment1, segment2);
  console.log('Joined file path:', joinedPath);
} else {
  console.error('Error: Please provide two file path segments as command-line arguments.');
}