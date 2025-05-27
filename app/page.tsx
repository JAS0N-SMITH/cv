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
        {['Profile', 'Positions', 'Education', 'Certifications', 'Skills', 'Rich_Media'].map((sectionKey) => {
          if (!data[sectionKey]) return null;

          switch (sectionKey) {
            case 'Profile': {
              const profile = data[sectionKey][0];
              return (
                <section key={sectionKey} className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100">
                  <h1 className="text-4xl font-bold mb-2 text-gray-800">{`${profile["First Name"]} ${profile["Last Name"]}`}</h1>
                  <h2 className="text-2xl text-gray-600 mb-4">{profile.Headline}</h2>
                  <p className="text-gray-700">{profile.Summary}</p>
                </section>
              );
            }

            case 'Positions': {
              return (
                <section key={sectionKey} className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Work Experience</h2>
                  <ul className="space-y-4">
                    {data[sectionKey].map((position: any, index: number) => (
                      <li key={index} className="border-b pb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{position.Title}</h3>
                        <p className="text-gray-600">{position.CompanyName}</p>
                        <p className="text-sm text-gray-500">{`${position.StartDate} - ${position.EndDate || 'Present'}`}</p>
                        <p className="text-gray-700 mt-2">{position.Description}</p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            }

            case 'Education': {
              return (
                <section key={sectionKey} className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Education</h2>
                  <ul className="space-y-4">
                    {data[sectionKey].map((education: any, index: number) => (
                      <li key={index} className="border-b pb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{education["Degree Name"]}</h3>
                        <p className="text-gray-600">{education["School Name"]}</p>
                        <p className="text-sm text-gray-500">
                          {education["Start Date"]} - {education["End Date"]}
                        </p>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            }

            case 'Certifications': {
              return (
                <section key={sectionKey} className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Certifications</h2>
                  <ul className="space-y-4">
                    {data[sectionKey].map((certification: any, index: number) => (
                      <li key={index} className="border-b pb-4">
                        <h3 className="text-xl font-semibold text-gray-800">{certification.Name}</h3>
                        <p className="text-gray-600">Authority: {certification.Authority}</p>
                        <p className="text-sm text-gray-500">
                          {certification["Started On"]} - {certification["Finished On"] || "Present"}
                        </p>
                        {certification["License Number"] && (
                          <p className="text-sm text-gray-500">License: {certification["License Number"]}</p>
                        )}
                        {certification.Url && (
                          <a
                            href={certification.Url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            View Certification
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              );
            }

            case 'Skills': {
              return (
                <section key={sectionKey} className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {data[sectionKey].map((skill: any, index: number) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill.Name}
                      </span>
                    ))}
                  </div>
                </section>
              );
            }

            case 'Rich_Media': {
              return (
                <section key={sectionKey} className="w-full max-w-4xl p-6 border rounded-lg shadow-lg bg-gray-100">
                  <h2 className="text-3xl font-bold mb-6 text-gray-800">Rich Media</h2>
                  <ul className="space-y-4">
                    {data[sectionKey].map((media: any, index: number) => (
                      <li key={index} className="border-b pb-4">
                        <a
                          href={media.URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 underline"
                        >
                          {media.Title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            }

            default:
              return null;
          }
        })}
      </main>
    </div>
  );
}
