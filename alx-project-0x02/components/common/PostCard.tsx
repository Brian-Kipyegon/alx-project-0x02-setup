// components/PostCard.tsx
import React from "react";

type Post = {
  id: number;
  title: string;
  body: string;
};

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="border p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <h2 className="text-lg font-bold mb-2">{post.title}</h2>
      <p className="text-gray-700">{post.body}</p>
    </div>
  );
};

export default PostCard;
