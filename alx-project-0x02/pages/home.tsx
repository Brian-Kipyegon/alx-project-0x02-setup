import { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function HomePage() {
  const [posts, setPosts] = useState([
    { title: "First Card", content: "This is the content of the first card." },
    { title: "Second Card", content: "This is the content of the second card." },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([...posts, { title, content }]);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-green-600 mb-6">Home Page</h1>
        
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add New Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddPost={handleAddPost}
      />
    </div>
  );
}
