const path = require('path');

function joinPaths(segment1, segment2) {
  return path.join(segment1, segment2);
}

const [, , segment1, segment2] = process.argv;

if (segment1 && segment2) {
  const joinedPath = joinPaths(segment1, segment2);
  console.log('Joined file path:', joinedPath);
} else {
  console.error('Error: Please provide two file path segments as command-line arguments.');
}