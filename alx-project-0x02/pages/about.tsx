import Header from "../components/layout/Header";
import Button from "../components/common/Button";

export default function AboutPage() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-4xl font-bold text-purple-600 mb-6">About Page</h1>
        <p className="text-lg text-gray-700 mb-6">Here are some reusable buttons:</p>

        <div className="flex space-x-4">
          <Button size="small" shape="rounded-sm" label="Small Button" />
          <Button size="medium" shape="rounded-md" label="Medium Button" />
          <Button size="large" shape="rounded-full" label="Large Button" />
        </div>
      </main>
    </div>
  );
}
