// import Image from "next/image";
import profileData from "../data/profile.json";

export default function Home() {
  const profile = profileData[0]; // Assuming the first entry is the main profile

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="bg-yellow-200 text-yellow-800 p-4 text-center">
        <p>
          🚀 Welcome to my updated CV site! Stay tuned for more updates. 🚀
        </p>
      </div>
      <main className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl font-bold">{`${profile["First Name"]} ${profile["Last Name"]}`}</h1>
        <h2 className="text-xl text-gray-600">{profile.Headline}</h2>
        <p className="text-center max-w-2xl">{profile.Summary}</p>
      </main>
    </div>
  );
}
