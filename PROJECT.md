# CV Website: Project Design and Architecture Document

_Last Updated: May 2025_

## 1. Overview

This project is designed as a personal CV website for a software developer. The objective is to create a modern, maintainable, and easily updatable site that not only displays static resume content but also incorporates dynamic data (like certifications and experience details) extracted from a LinkedIn data export. The site is built with Next.js and Tailwind CSS, and it is deployed as a static site on GitHub Pages. A Node.js script processes CSV data from LinkedIn exports to keep content fresh and relevant.

---

## 2. Goals and Requirements

- **Ease of Maintenance:**  
  Provide a way to update the site by simply re-exporting data from LinkedIn and running a parsing script.

- **Modern Development:**  
  Use Next.js for fast development with server-side and static generation capabilities, and Tailwind CSS for rapid, modern UI styling.

- **Static Site Generation:**  
  Produce a fully static site with Next.js's export feature to leverage GitHub Pages' hosting model, ensuring low latency and high reliability.

- **Scalability and Modularity:**  
  Structure the project so that additional data sources (such as additional CSV files or even a headless CMS in the future) can be integrated without a major refactor.

- **Continuous Deployment:**  
  Optionally use GitHub Actions to automate the testing, building, and deployment of the site every time updates are pushed.

---

## 3. Architectural Components

### 3.1 Presentation Layer (Frontend)

- **Next.js Framework:**  
  The core of the application is built on Next.js, supporting hybrid rendering modes. The primary approach is Static Site Generation (SSG) paired with incremental updates via re-building when the CSV data changes.

- **React Components:**  
  The site is built using modular React components for layout, navigation, and individual sections (such as About, Certifications, Skills, and Projects). Each component is styled with Tailwind CSS classes.

- **Tailwind CSS:**  
  A utility-first CSS framework used to design responsive, modern user interfaces. Tailwind helps maintain design consistency and accelerates the UI development process.

### 3.2 Data Acquisition and Transformation

- **LinkedIn Data Export:**  
  The website leverages manually exported CSV files from LinkedIn (containing certification, work experience, and education details). These serve as the primary data source for dynamically updating the CV content.

- **Parsing Script:**  
  A Node.js script (using the `csv-parser` package) converts CSV files (e.g., `Certifications.csv`) into JSON files stored in a designated `data` directory. This JSON is then consumed by Next.js at build time using `getStaticProps`.

- **Data File Structure:**  
  The conversion outputs are stored in a structured folder (`/data`) that is read during the static generation phase to update the site's content.

### 3.3 Build and Deployment

- **Static Export with Next.js:**  
  The site is exported as a static site using `next export`. The Next.js configuration (`next.config.js`) is set up specifically with `trailingSlash`, `assetPrefix`, and `basePath` settings for compatibility with GitHub Pages.

- **GitHub Pages Hosting:**  
  The fully static build output is deployed to a separate branch (typically `gh-pages`) to be served via GitHub Pages.

- **Continuous Integration with GitHub Actions (Optional):**  
  An automated workflow is defined to:
  - Trigger on pushes to the main branch.
  - Install dependencies.
  - Run the build and export commands.
  - Deploy the generated `out` directory to the GitHub Pages branch using an action such as `peaceiris/actions-gh-pages`.

---

## 4. Technology Stack

| Layer                | Technology / Tool                                  | Role                                           |
|----------------------|----------------------------------------------------|------------------------------------------------|
| **Frontend**         | Next.js, React                                     | UI, SSG/SSR, Page and Component Management     |
| **Styling**          | Tailwind CSS                                       | Responsive and modern UI design                |
| **Scripting/Parsing**| Node.js with csv-parser                            | Process CSV data from LinkedIn into JSON        |
| **Deployment**       | GitHub Pages, GitHub Actions (CI/CD)               | Hosting and automated deployment              |

---

## 5. Folder Structure

A suggested structure for the project is as follows:

```
my-cv/
├── components/           # Reusable React components (e.g., layout, header, footer)
├── data/                 # Parsed JSON data files extracted from CSV exports
├── docs/                 # Documentation (including this architecture document)
├── linkedin-data/        # Original CSV files exported from LinkedIn
├── next.config.js        # Next.js configuration for static export and asset prefixing
├── pages/                # Next.js pages (with getStaticProps integrating data)
│   ├── index.js        # Homepage showing CV details like certifications
│   └── ...
├── public/               # Static assets (images, fonts, etc.)
├── scripts/              # Node.js scripts (e.g., CSV parsing)
│   └── parseLinkedIn.js # Script for converting LinkedIn CSV data into JSON format
├── .github/              # GitHub Actions workflows for CI/CD automation
│   └── workflows/
│       └── deploy.yml   # Workflow to build and deploy to GitHub Pages
├── styles/               # Global and component-specific CSS (Tailwind CSS directives live here)
└── package.json          # Project metadata and scripts
```

---

## 6. System Flow and Data Pipeline

1. **LinkedIn Data Export:**  
   - The user exports data from LinkedIn manually and places the CSV files in the `/linkedin-data` directory.

2. **Data Parsing:**  
   - The Node.js script (`scripts/parseLinkedIn.js`) is executed either manually or as part of a CI/CD pipeline to read the CSV files and output JSON files to the `/data` directory.

3. **Static Site Generation:**  
   - Next.js consumes the JSON data via the `getStaticProps` methods in pages (e.g., `pages/index.js`), integrating up-to-date information into the rendered CV site.
   - The site is built and statically exported into the `out` folder using `npm run build && npm run export`.

4. **Deployment:**  
   - The contents of the `out` directory are deployed to GitHub Pages either manually or automatically via GitHub Actions, ensuring that the site reflects the latest data exports.

---

## 7. Design Decisions and Trade-offs

- **Static vs. Dynamic:**  
  By leveraging static site generation, the solution benefits from excellent performance and low hosting overhead. The trade-off is that real-time updates aren’t available until a rebuild occurs.

- **Data Ingestion Mechanism:**  
  Using the LinkedIn export avoids the complexities (and API access restrictions) of the LinkedIn API. However, reliance on manual data export means updates are not entirely automated unless you integrate a schedule for running the parsing script.

- **Tooling and Frameworks:**  
  Next.js and Tailwind CSS provide a modern, component-based development experience. Alternatives like Jekyll were considered but did not provide as flexible an environment for future enhancements as Next.js.

- **CI/CD Automation:**  
  While manual deployment is possible, automating builds and deploys using GitHub Actions makes the workflow robust and less error-prone over time. This requires additional configuration but pays dividends in maintenance and consistency.

---

## 8. Future Enhancements

- **Extended Data Parsing:**  
  Expand the parsing scripts to handle additional CSV files (work experience, education, etc.) and integrate them into different sections of the CV.

- **Headless CMS Integration:**  
  For more dynamic content updates, consider integrating a headless CMS (e.g., Contentful, Sanity) to manage and version your CV data.

- **Enhanced Analytics:**  
  Integrate visitor tracking and analytics (using Google Analytics, Plausible, etc.) to gain insights into how your CV site is used by prospective employers or collaborators.

- **SEO and Accessibility Improvements:**  
  Continuously optimize the site for search engine visibility and ensure compliance with accessibility standards.

---

## 9. Conclusion

The design and architecture outlined above provide a clear plan for building and maintaining a state-of-the-art CV website that leverages Next.js and Tailwind CSS for modern UI, integrates data from LinkedIn exports, and deploys as a static site to GitHub Pages. By automating data ingestion and deployment, the solution remains both robust and scalable, aligning perfectly with the objectives of maintaining a cutting-edge developer portfolio.

---