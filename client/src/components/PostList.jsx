import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import PostListItem from "./PostListItem";

const PostList = () => {
  const {
    data: posts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/posts`);
      return res.data;
    },
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (error) return <p>Failed to load posts.</p>;
  if (!isLoading && posts.length === 0) return <p>No posts found.</p>;

  return (
    <div className="flex flex-col mb-8">
      {posts.map((post, index) => (
        <div key={post._id}>
          <PostListItem
            image={post.coverImage || post.image}
            title={post.title}
            excerpt={post.description}
            author={post.user?.name}
            authorImage={post.user?.image}
            authorId={post.user?._id}
            authorSlug={post.user?.slug}
            category={
              Array.isArray(post.category)
                ? post.category.join(", ")
                : post.category
            }
            slug={post.slug}
            date={post.createdAt}
          />
          {/* Add a line between items except after the last one */}
          {index < posts.length - 1 && (
            <hr className="my-4 border-t border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default PostList;
