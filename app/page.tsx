import fs from "fs";
import path from "path";

interface Data {
  [key: string]: any;
}

export default function Home() {
  const dataDir = path.join(process.cwd(), "data");
  const files = fs.readdirSync(dataDir);

  const data: Data = files.reduce((acc: Data, file: string) => {
    if (path.extname(file) === ".json") {
      const filePath = path.join(dataDir, file);
      const fileData = JSON.parse(fs.readFileSync(filePath, "utf-8"));
      acc[path.basename(file, ".json")] = fileData;
    }
    return acc;
  }, {});

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-yellow-200 text-yellow-800 p-4 text-center">
        <p>
          🚀 Welcome to my updated CV site! Stay tuned for more updates. 🚀
        </p>
      </div>
      <main className="flex flex-col gap-8 items-center">
        {Object.entries(data).map(([key, value]) => (
          <section
            key={key}
            className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100"
          >
            <h2 className="text-3xl font-bold mb-6 text-gray-800">{key}</h2>
            <div className="text-sm bg-white p-4 rounded-lg overflow-auto border border-gray-300">
              <ul className="list-disc pl-6 text-gray-700">
                {Array.isArray(value)
                  ? value.map((item, index) => (
                      <li key={index} className="mb-2">
                        {typeof item === "object" ? (
                          <pre className="text-xs bg-gray-50 p-2 rounded-md border border-gray-200">
                            {JSON.stringify(item, null, 2)}
                          </pre>
                        ) : (
                          <span>{item}</span>
                        )}
                      </li>
                    ))
                  : typeof value === "object" ? (
                      <pre className="text-xs bg-gray-50 p-2 rounded-md border border-gray-200">
                        {JSON.stringify(value, null, 2)}
                      </pre>
                    ) : (
                      <p>{value}</p>
                    )}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
