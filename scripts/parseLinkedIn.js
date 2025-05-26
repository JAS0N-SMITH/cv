const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const inputFilePath = path.join(__dirname, '../Profile.csv');
const outputFilePath = path.join(__dirname, '../data/profile.json');

// Ensure the output directory exists
const outputDir = path.dirname(outputFilePath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const results = [];

fs.createReadStream(inputFilePath)
  .pipe(csvParser())
  .on('data', (data) => results.push(data))
  .on('end', () => {
    fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2));
    console.log(`Parsed data has been saved to ${outputFilePath}`);
  })
  .on('error', (err) => {
    console.error('Error reading or parsing the CSV file:', err);
  });
