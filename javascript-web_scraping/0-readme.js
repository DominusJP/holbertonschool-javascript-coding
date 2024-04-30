const fs = require('fs');

// Check if the file path argument is provided
if (process.argv.length < 3) {
  console.error('Usage: node 0-readme.js <file_path>');
  process.exit(1);
}

// Get the file path from the command line arguments
const filePath = process.argv[2];

// Read the content of the file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  // Print the content of the file
  console.log(data);
});
