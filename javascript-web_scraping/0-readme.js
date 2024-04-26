const fs = require('fs');

// Check if file path is provided as argument
if (process.argv.length < 3) {
  console.error('Usage: node read_file.js <file_path>');
  process.exit(1);
}

// Get file path from command line arguments
const filePath = process.argv[2];

// Read file content
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
