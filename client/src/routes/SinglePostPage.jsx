import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Facebook, Twitter, Linkedin, Share2 } from "lucide-react";
import getRelativeTime from "../utils/getRelativeTime";
import Comment from "../components/comment";


const SinglePostPage = () => {
  const { slug } = useParams();

  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/${slug}`
      );
      const p = res.data;
      return { ...p, description: p.description };
    },
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load post.</p>;
  if (!post) return <p>Post not found.</p>;

  return (
    <div className="max-w-4xl mx-auto  py-2 relative">
      {/* Date */}
      <p className="text-gray-500 text-sm text-left">
        Published {getRelativeTime(post.createdAt)}
      </p>

      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-3xl font-extrabold text-left mt-2">
        {post.title}
      </h1>
      {/* Subtitle */}
      <p className="text-gray-600 text-base sm:text-lg text-left mt-2">
        {post.description}
      </p>
      {/* Categories */}
      <div className="flex flex-wrap text-left gap-3 mt-4">
        {(Array.isArray(post.category)
          ? post.category[0]?.split(",") // split the first string
          : post.category?.split(",")
        ) // if it's just a string
          .map((tag) => tag.trim())
          .filter((tag) => tag.length > 0)
          .map((tag) => (
            <span
              key={tag}
              className="px-4 py-1 text-sm bg-blue-200 text-blue-700 rounded-md"
            >
              {tag}
            </span>
          ))}
      </div>

      {post.coverImage && (
        <div className="mt-6 w-full">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-auto rounded-xl"
          />
        </div>
      )}

      {/* Floating social icons */}
      <div className="fixed top-1/3 right-6 hidden lg:flex flex-col gap-4">
        <Link to="#">
          <Facebook className="w-5 h-5 text-gray-500 hover:text-blue-600" />
        </Link>
        <Link to="#">
          <Twitter className="w-5 h-5 text-gray-500 hover:text-sky-500" />
        </Link>
        <Link to="#">
          <Linkedin className="w-5 h-5 text-gray-500 hover:text-blue-700" />
        </Link>
        <Link to="#">
          <Share2 className="w-5 h-5 text-gray-500 hover:text-gray-900" />
        </Link>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none mt-8"
        dangerouslySetInnerHTML={{
          __html: Array.isArray(post.content)
            ? post.content.join("")
            : post.content,
        }}
      />
      <Comment postId={post._id} />
    </div>
  );
};

export default SinglePostPage;
