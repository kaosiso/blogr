import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const PublicProfilePage = () => {
  const { slug } = useParams(); // get userId from URL
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
       const res = await axios.get(
         `${import.meta.env.VITE_API_URL}/users/${slug}`
       );
        setUser(res.data.user);
        setPosts(res.data.posts);
      } catch (err) {
        console.error("Failed to fetch public profile:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading profile...</p>;
  if (!user) return <p className="text-center py-10">User not found.</p>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <img
          src={
            user.image
              ? user.image.startsWith("http")
                ? user.image
                : `${import.meta.env.VITE_API_URL}/${user.image}`
              : "/default-avatar.png"
          }
          alt={user.name}
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-800">{user.name}</h1>
        {user.about && (
          <p className="mt-2 max-w-2xl text-gray-600 text-sm sm:text-base">
            {user.about}
          </p>
        )}
      </div>

      {/* Work Section */}
      <div>
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Work</h2>
        {posts.length === 0 ? (
          <p className="text-gray-500">No published posts yet.</p>
        ) : (
          <div className="space-y-4">
            {posts.map((post) => (
              <div
                key={post._id}
                onClick={() => navigate(`/post/${post.slug}`)}
                className="cursor-pointer border rounded-lg p-4 hover:shadow-md transition"
              >
                <h3 className="text-lg font-medium text-gray-800">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">
                  {post.description}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PublicProfilePage;
