# Instructions for Updating and Running the CV Website

This document provides step-by-step instructions for obtaining LinkedIn profile data, parsing it, and updating the CV website.

---

## 1. Exporting LinkedIn Profile Data

1. **Log in to LinkedIn:**
   - Go to [LinkedIn](https://www.linkedin.com/) and log in to your account.

2. **Request a Data Export:**
   - Navigate to `Settings & Privacy` > `Data Privacy` > `Get a copy of your data`.
   - Select the option to export specific data and choose the following categories:
     - Certifications
     - Education
     - Positions
     - Skills
   - Submit the request. LinkedIn will email you a download link once the data is ready.

3. **Download the Data:**
   - Download the ZIP file from the email or LinkedIn's data export page.
   - Extract the ZIP file and locate the CSV files (e.g., `Certifications.csv`, `Education.csv`, etc.).

4. **Place the CSV Files:**
   - Move the extracted CSV files into the project directory under the `linkedin-data/` folder.

---

## 2. Parsing LinkedIn Data

1. **Install Dependencies:**
   - Ensure you have Node.js installed on your system.
   - Run the following command in the project root to install required packages:

     ```bash
     npm install
     ```

2. **Run the Parsing Script:**
   - Execute the Node.js script to parse the CSV files and generate JSON files:

     ```bash
     node scripts/parseLinkedIn.js
     ```

   - This will process the CSV files and output JSON files into the `data/` directory.

3. **Verify the Output:**
   - Check the `data/` directory to ensure JSON files (e.g., `Certifications.json`, `Education.json`) have been created.

---

## 3. Updating the CV Website

1. **Build the Website:**
   - Run the following command to build the static site:

     ```bash
     npm run build
     ```

2. **Export the Static Site:**
   - Export the site for deployment:

     ```bash
     npm run export
     ```

3. **Deploy to GitHub Pages:**
   - If you have GitHub Actions configured, push your changes to the `master` branch, and the deployment will be triggered automatically.
   - Alternatively, manually deploy the contents of the `out/` directory to the `gh-pages` branch.

---

## Important Note

The application is served with a base path `/cv`. When accessing the site locally, ensure your URL includes `/cv` (e.g., `http://localhost:3000/cv`).

---

## 4. Additional Notes

- Ensure that the CSV files are correctly formatted and match the expected structure.
- If you encounter issues, check the logs from the parsing script for errors.
- For more details on the project architecture, refer to the [PROJECT.md](./PROJECT.md) file.