const fs = require('fs');
const path = require('path');
const csvParser = require('csv-parser');

const inputDirPath = path.join(
  __dirname,
  "../Basic_LinkedInDataExport_05-26-2025.zip"
);
const outputDirPath = path.join(__dirname, "../data");

// Ensure the output directory exists
if (!fs.existsSync(outputDirPath)) {
  fs.mkdirSync(outputDirPath, { recursive: true });
}

fs.readdir(inputDirPath, (err, files) => {
  if (err) {
    console.error("Error reading the input directory:", err);
    return;
  }

  const csvFiles = files.filter(
    (file) => path.extname(file).toLowerCase() === ".csv"
  );

  csvFiles.forEach((file) => {
    const inputFilePath = path.join(inputDirPath, file);
    const outputFilePath = path.join(
      outputDirPath,
      `${path.basename(file, ".csv")}.json`
    );

    const results = [];

    fs.createReadStream(inputFilePath)
      .pipe(csvParser())
      .on("data", (data) => results.push(data))
      .on("end", () => {
        fs.writeFileSync(outputFilePath, JSON.stringify(results, null, 2));
        console.log(
          `Parsed data from ${file} has been saved to ${outputFilePath}`
        );
      })
      .on("error", (err) => {
        console.error(`Error reading or parsing the file ${file}:`, err);
      });
  });
});
