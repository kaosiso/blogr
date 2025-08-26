import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";
import getRelativeTime from "../utils/getRelativeTime";

const PostListItem = ({
  image,
  title,
  excerpt,
  author,
  authorImage,
  authorId,
  authorSlug,
  category,
  slug,
  date, // passed from PostList
}) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleAuthorClick = () => {
    if (user && user._id === authorId) {
      navigate("/profile");
    } else {
      navigate(`/users/${authorSlug}`);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center p-3 rounded-lg transition">
      {/* Post Image */}
      {image && (
        <div className="flex flex-col w-full gap-2 sm:w-auto">
          <img
            src={image}
            alt={title}
            className="w-full sm:w-40 h-40 sm:h-28 object-cover rounded-lg flex-shrink-0"
          />

          {/* Categories for mobile only (directly under the image) */}
          <div className="flex flex-wrap gap-2 mt-2 sm:hidden">
            {category &&
              (Array.isArray(category)
                ? category.flatMap((c) => c.split(","))
                : category.split(",")
              )
                .map((tag) => tag.trim())
                .filter((tag) => tag.length > 0)
                .map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
          </div>
        </div>
      )}

      {/* Content column */}
      <div className="flex flex-col justify-between flex-1">
        {/* Title */}
        <h2
          className="text-lg font-semibold text-gray-800 cursor-pointer line-clamp-1 sm:line-clamp-2"
          onClick={() => navigate(`/posts/${slug}`)}
        >
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mt-1 line-clamp-1 sm:line-clamp-2">
          {excerpt}
        </p>

        {/* Author, Date & Categories for desktop */}
        <div className="flex flex-wrap items-center gap-2 mt-3">
          {/* Author */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={handleAuthorClick}
          >
            <img
              src={authorImage || "/default-avatar.png"}
              alt={author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <span className="text-sm text-gray-700 truncate">{author}</span>
          </div>

          {/* Relative Date */}
          {date && (
            <span className="text-sm text-gray-700">
              {getRelativeTime(date)}
            </span>
          )}

          {/* Categories for desktop only */}
          <div className="hidden sm:flex flex-wrap gap-2 ml-2">
            {category &&
              (Array.isArray(category)
                ? category.flatMap((c) => c.split(","))
                : category.split(",")
              )
                .map((tag) => tag.trim())
                .filter((tag) => tag.length > 0)
                .map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostListItem;
