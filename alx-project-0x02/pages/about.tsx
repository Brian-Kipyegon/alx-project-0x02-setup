import Header from "../components/layout/Header";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-purple-600">About Page</h1>
        <p className="mt-4 text-lg text-gray-700">
          This is the About page. ℹ️
        </p>
      </main>
    </div>
  );
}
