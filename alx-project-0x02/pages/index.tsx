// pages/index.tsx
import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

type Post = {
  id: number;
  title: string;
  body: string;
};

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPosts() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Latest Posts</h1>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
