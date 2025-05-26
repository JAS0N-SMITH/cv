import fs from "fs";
import path from "path";
import { GetStaticProps } from "next";

interface Data {
  [key: string]: any;
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  // Get the data directory path
  const dataDir = path.join(process.cwd(), "data");
  // Read the files in the data directory
  const files = fs.readdirSync(dataDir);

  // Reduce the files to an object with file names as keys and file contents as values
  const data: Data = files.reduce((acc: Data, file: string) => {
    if (path.extname(file) === ".json") {
      const filePath = path.join(dataDir, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      acc[path.basename(file, ".json")] = fileData;
    }
    return acc;
  }, {});

  // Pass the data to the page via props
  return {
    props: { data },
  };
};

interface HomeProps {
  data: Data;
}

export default function Home({ data }: HomeProps) {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-yellow-200 text-yellow-800 p-4 text-center">
        <p>
          🚀 Welcome to my updated CV site! Stay tuned for more updates. 🚀
        </p>
      </div>
      <main className="flex flex-col gap-4 items-center">
        {Object.entries(data).map(([key, value]) => (
          <section key={key} className="w-full max-w-4xl p-4 border rounded-md shadow-md">
            <h2 className="text-2xl font-bold mb-4">{key}</h2>
            <pre className="text-sm bg-gray-100 p-2 rounded-md overflow-auto">
              {JSON.stringify(value, null, 2)}
            </pre>
          </section>
        ))}
      </main>
    </div>
  );
}
