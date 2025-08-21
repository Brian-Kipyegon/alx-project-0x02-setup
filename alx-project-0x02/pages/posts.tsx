import Header from "@/components/layout/Header";

export default function PostsPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Posts Page</h1>
        <p className="text-lg text-gray-700">
          Posts will be displayed here soon 📄
        </p>
      </main>
    </div>
  );
}
