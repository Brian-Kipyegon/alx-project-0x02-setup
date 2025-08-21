import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-blue-600">
          Welcome to Next.js Project Setup 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Next.js + TypeScript + Tailwind CSS
        </p>
      </main>
    </div>
  );
}
