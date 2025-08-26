import React, { useEffect, useState } from "react";
import axios from "axios";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { MdOutlineCloudOff, MdOutlineCloudDone } from "react-icons/md";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [editing, setEditing] = useState(false);
  const [openMenuId, setOpenMenuId] = useState(null);
  const [activeTab, setActiveTab] = useState("work");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    image: null,
    about: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileAndPosts = async () => {
      try {
        const profileRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/profile`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setUser(profileRes.data);
        setFormData({
          name: profileRes.data.name,
          email: profileRes.data.email,
          image: null,
          about: profileRes.data.about || "",
        });

        const postsRes = await axios.get(
          `${import.meta.env.VITE_API_URL}/users/posts`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        setPosts(postsRes.data);
      } catch (err) {
        console.error("Failed to fetch profile or posts:", err);
      }
    };

    fetchProfileAndPosts();
  }, []);

  if (!user) return <p className="text-center py-10">Loading profile...</p>;

  const handleDelete = async (slug) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("Not authenticated");

      await axios.delete(`${import.meta.env.VITE_API_URL}/posts/${slug}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      toast.success("Post deleted successfully");
      setPosts((prev) => prev.filter((p) => p.slug !== slug));
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete post");
    }
  };

  const handleSave = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("about", formData.about);
      if (formData.image) formDataToSend.append("image", formData.image);

      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/users/profile`,
        formDataToSend,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      setUser(res.data);
      setEditing(false);
    } catch (err) {
      console.error("Update failed:", err);
    }
  };

  const renderPosts = (status) => {
    const filtered = posts.filter((p) => p.status === status);
    if (filtered.length === 0)
      return (
        <p className="text-center text-gray-500 py-10">
          {status === "published" ? "No published posts yet" : "No drafts yet"}
        </p>
      );

    return filtered.map((post) => (
      <div
        key={post._id}
        className="flex items-start gap-4 border-2 border-grey-500 rounded-xl hover:text-blue-600 transition p-4 relative"
      >
        <img
          src={post.coverImage || "/featured1.jpeg"}
          alt={post.title}
          className="w-10 h-8 sm:w-32 sm:h-24 md:w-36 md:h-28 object-cover rounded-md"
        />
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-0">
              <h3 className="font-semibold text-sm sm:text-xl mb-1 text-gray-800 line-clamp-2">
                {post.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base line-clamp-1 ">
                {post.description || "—"}
              </p>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              {post.status === "published" ? (
                <MdOutlineCloudDone
                  className="text-green-500"
                  size={24}
                  title="Published"
                />
              ) : (
                <MdOutlineCloudOff
                  className="text-gray-400"
                  size={24}
                  title="Draft"
                />
              )}
              <button
                className="text-blue-500 hover:text-blue-700"
                onClick={() => navigate(`/edit/${post.slug}`)}
              >
                <AiOutlineEdit size={22} />
              </button>
              <button
                className="text-red-500 hover:text-red-700"
                onClick={() => handleDelete(post.slug)}
              >
                <AiOutlineDelete size={22} />
              </button>
            </div>
            <div className="sm:hidden relative flex items-center gap-2">
              {post.status === "published" ? (
                <MdOutlineCloudDone
                  className="text-green-500"
                  size={20}
                  title="Published"
                />
              ) : (
                <MdOutlineCloudOff
                  className="text-gray-400"
                  size={20}
                  title="Draft"
                />
              )}
              <button
                onClick={() =>
                  setOpenMenuId(openMenuId === post._id ? null : post._id)
                }
              >
                <BsThreeDotsVertical size={22} />
              </button>
              {openMenuId === post._id && (
                <div className="absolute right-0 mt-2 w-36 bg-[#fdf6e3] border rounded-lg shadow-lg z-100">
                  <button
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 text-blue-500"
                    onClick={() => navigate(`/edit/${post.slug}`)}
                  >
                    <AiOutlineEdit size={18} className="mr-2" />
                    Edit
                  </button>
                  <button
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100 text-red-500"
                    onClick={() => handleDelete(post.slug)}
                  >
                    <AiOutlineDelete size={18} className="mr-2" />
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <div className="max-w-6xl mx-auto px-0 py-2 sm:py-10">
      {/* Profile Header */}
      <div className="flex flex-col md:flex-row items-start mb-4 md:justify-between sm:mb-4 gap-4">
        <div className="flex items-center px-2 pt-2 gap-6">
          <img
            src={
              user.image
                ? user.image.startsWith("http")
                  ? user.image
                  : `${import.meta.env.VITE_API_URL}/${user.image}`
                : "/default-avatar.png"
            }
            alt="Profile"
            className="w-20 h-20 sm:w-28 sm:h-28 rounded-full object-cover"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl text-gray-700 sm:text-2xl font-bold">
                {user.name}
              </h1>
              <RiVerifiedBadgeFill className="text-blue-500 text-xl sm:text-2xl" />
            </div>
            <p className="text-gray-600 text-sm sm:text-base mt-1 sm:mt-2">
              {user.email}
            </p>
            <button
              onClick={() => setEditing(true)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600"
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="border-b mb-6">
        <ul className="flex gap-4 sm:gap-6 text-gray-600 text-sm sm:text-base overflow-x-auto">
          {["work", "drafts", "saved", "about"].map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 cursor-pointer whitespace-nowrap ${
                activeTab === tab
                  ? "border-b-2 border-black font-medium text-black"
                  : "hover:text-black transition"
              }`}
            >
              {tab === "work" && "Work"}
              {tab === "drafts" && "Drafts"}
              {tab === "saved" && "Saved Posts"}
              {tab === "about" && "About"}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      {activeTab === "work" && (
        <div className="space-y-4">{renderPosts("published")}</div>
      )}
      {activeTab === "drafts" && (
        <div className="space-y-4">{renderPosts("draft")}</div>
      )}
      {activeTab === "saved" && (
        <div className="p-4 bg-gray-50 rounded-xl text-gray-600">
          <p>Saved posts will show here (fetch from user.savedPosts later).</p>
        </div>
      )}
      {activeTab === "about" && (
        <div className="p-4  rounded-xl ">
          <p className="text-gray-700 whitespace-pre-line">
            {user.about || "tell people something about you"}
          </p>
        </div>
      )}

      {/* Edit Profile Modal (simple inline example) */}
      {editing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">Edit Profile</h2>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Name"
              className="w-full mb-3 p-2 border rounded-lg"
            />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Email"
              className="w-full mb-3 p-2 border rounded-lg"
            />
            <textarea
              value={formData.about}
              onChange={(e) =>
                setFormData({ ...formData, about: e.target.value })
              }
              className="w-full mb-3 p-2 border rounded-lg"
              rows="4"
              placeholder="Write something about yourself..."
            />
            <input
              type="file"
              accept="image/*"
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.files[0] })
              }
              className="w-full mb-3"
            />
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditing(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
