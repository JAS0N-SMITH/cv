# CV Website

This repository contains the source code for a personal CV website built with Next.js and Tailwind CSS. The site is designed to display dynamic resume content extracted from LinkedIn data exports and is deployed as a static site on GitHub Pages.

---

## Features

- **Dynamic Resume Content:**
  - Certifications, education, and work experience are dynamically updated from LinkedIn data exports.
- **Modern UI:**
  - Built with Tailwind CSS for a responsive and modern design.
- **Static Site Generation:**
  - Uses Next.js to generate a fully static site for deployment on GitHub Pages.
- **Automated Deployment:**
  - Optionally uses GitHub Actions for CI/CD.

---

## Important Note

The application is served with a base path `/cv`. When accessing the site locally, ensure your URL includes `/cv` (e.g., `http://localhost:3000/cv`).

---

## Setup Instructions

To set up and run the project locally, follow these steps:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/JAS0N-SMITH/cv.git
   cd cv
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Run the Development Server:**

   ```bash
   npm run dev
   ```

4. **Build and Export the Static Site:**

   ```bash
   npm run build
   npm run export
   ```

---

## Documentation

- For detailed project architecture and design, refer to the [PROJECT.md](./PROJECT.md) file.
- For instructions on how to update LinkedIn data and run the parsing scripts, refer to the [INSTRUCTIONS.md](./INSTRUCTIONS.md) file.

---

## License

This project is licensed under the MIT License.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
