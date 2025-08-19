import React from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";


const fetchPosts = async () => {
  const res = axios.get(`${import.meta.env.VITE_API_URL}/posts`)
  return res.data
}

const PostListItem = ({
  image,
  title,
  excerpt,
  author,
  authorImage,
  category,
}) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("https://api.github.com/repos/TanStack/query").then((res) =>
        res.json()
      ),
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
  console.log(data);
  console.log(import.meta.env.VITE_SOCKET_PORT); // Should log the port number

  return (
    <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
      {/* Image */}
      <div className="w-full lg:w-1/3">
        <Image
          src={image}
          className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover rounded-2xl"
        />
      </div>

      {/* Details */}
      <div className="flex-1 space-y-2 sm:space-y-3 md:space-y-4">
        <Link
          to="/test"
          className="font-semibold hover:underline text-[clamp(1rem,2vw,1.875rem)]"
        >
          {title}
        </Link>

        <div className="flex items-center gap-2 text-gray-400 text-[clamp(0.625rem,1vw,0.875rem)]">
          {authorImage && (
            <img
              src={authorImage}
              alt={author}
              className="w-6 h-6 rounded-full object-cover"
            />
          )}
          <span>written by</span>
          <Link className="text-black hover:underline">{author}</Link>
          <span>on</span>
          <span className="font-medium text-gray-600">{category}</span>
        </div>

        <p className="text-gray-700 leading-relaxed text-[clamp(0.875rem,1.5vw,1rem)] line-clamp-3 md:line-clamp-none">
          {excerpt}
        </p>
      </div>
    </div>
  );
};

export default PostListItem;
