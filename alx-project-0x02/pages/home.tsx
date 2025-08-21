import Header from "../components/layout/Header";
import Card from "../components/common/Card";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Home Page</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card title="First Card" content="This is the content of the first card." />
          <Card title="Second Card" content="This is the content of the second card." />
          <Card title="Third Card" content="Cards are reusable and dynamic!" />
        </div>
      </main>
    </div>
  );
}
