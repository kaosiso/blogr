import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useQuillModules } from "./CommentModules";
import { BsThreeDotsVertical } from "react-icons/bs";

const Comment = ({ postId }) => {
  const navigate = useNavigate();
  const quillRef = useRef(null);
  const modules = useQuillModules(quillRef);

  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const [editingComment, setEditingComment] = useState(null);
  const [editText, setEditText] = useState("");

  // ✅ Load current user from localStorage
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      setCurrentUser(user);
    }
  }, []);

  // ✅ Fetch comments
  const fetchComments = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`
      );
      setComments(res.data);
    } catch (err) {
      console.error("Failed to fetch comments:", err);
    }
  };

const handleSubmit = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    navigate("/login");
    return;
  }

  if (!newComment.trim()) return alert("Write something first!");
  setLoading(true);

  try {
    const res = await axios.post(
      `${import.meta.env.VITE_API_URL}/comments/${postId}`,
      { text: newComment },
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setComments([
      {
        ...res.data,
        user: currentUser, // ensure user info is attached
        createdAt: res.data.createdAt || new Date().toISOString(),
      },
      ...comments,
    ]);
    setNewComment("");
  } catch (err) {
    console.error("Failed to submit comment:", err);
    alert(err.response?.data?.message || "Failed to submit comment");
  } finally {
    setLoading(false);
  }
};


  // ✅ Report comment
  const handleReport = async (commentId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${commentId}/report`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Comment reported successfully!");
    } catch (err) {
      console.error("Failed to report comment:", err);
      alert(err.response?.data?.message || "Failed to report comment");
    }
  };

  // ✅ Delete comment
  const handleDelete = async (commentId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      await axios.delete(
        `${import.meta.env.VITE_API_URL}/comments/${commentId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setComments(comments.filter((c) => c._id !== commentId));
    } catch (err) {
      console.error("Failed to delete comment:", err);
      alert(err.response?.data?.message || "Failed to delete comment");
    }
  };

  // ✅ Start editing
  const handleEdit = (comment) => {
    setEditingComment(comment._id);
    setEditText(comment.text);
    setMenuOpen(null);
  };

  // ✅ Save edit
  const handleSaveEdit = async (commentId) => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const res = await axios.put(
        `${import.meta.env.VITE_API_URL}/comments/${commentId}`,
        { text: editText },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setComments(comments.map((c) => (c._id === commentId ? res.data : c)));
      setEditingComment(null);
      setEditText("");
    } catch (err) {
      console.error("Failed to edit comment:", err);
      alert(err.response?.data?.message || "Failed to edit comment");
    }
  };

  useEffect(() => {
    if (postId) fetchComments();
  }, [postId]);

  return (
    <div className="max-w-4xl mx-auto sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {/* New Comment Box */}
      <div className="mb-6 border rounded-lg bg-white p-4 flex flex-col">
        <ReactQuill
          ref={quillRef}
          theme="snow"
          value={newComment}
          onChange={setNewComment}
          modules={modules}
          placeholder="Write your comment here..."
          className="h-32 sm:h-40 mb-4"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg disabled:opacity-50"
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </div>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.map((comment) => {
          // ✅ Fix: check both `_id` and `id`
          const isOwner =
            currentUser &&
            comment.user?._id === (currentUser._id || currentUser.id);

          return (
            <div
              key={comment._id || comment.id}
              className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm relative"
            >
              <img
                src={
                  comment.user?.image ||
                  "https://placehold.co/40x40/6B7280/FFFFFF?text=U"
                }
                alt={`${comment.user?.name || "Anonymous"} avatar`}
                className="w-10 h-10 rounded-full border-2 border-orange-500 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-gray-900">
                    {comment.user?.name || "Anonymous"}
                  </span>
                  <div className="flex items-center gap-2 relative">
                    <span className="text-gray-500 text-sm">
                      {new Date(comment.createdAt).toLocaleString()}
                    </span>
                    {/* Three dots */}
                    <button
                      onClick={() =>
                        setMenuOpen(
                          menuOpen === comment._id ? null : comment._id
                        )
                      }
                      className="p-1 rounded-full hover:bg-gray-100"
                    >
                      <BsThreeDotsVertical size={18} />
                    </button>

                    {menuOpen === comment._id && (
                      <div className="absolute right-0 top-6 w-32 bg-white border rounded-lg shadow-md z-10">
                        {isOwner ? (
                          <>
                            <button
                              onClick={() => handleEdit(comment)}
                              className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                            >
                              Edit
                            </button>
                            <button
                              onClick={() => handleDelete(comment._id)}
                              className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                            >
                              Delete
                            </button>
                          </>
                        ) : (
                          <button
                            onClick={() => handleReport(comment._id)}
                            className="block w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-gray-100"
                          >
                            Report
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                                {/* Editing Mode */}
                {editingComment === comment._id ? (
                  <div className="mt-2">
                    <ReactQuill
                      theme="snow"
                      value={editText}
                      onChange={setEditText}
                      modules={modules}
                      className="h-32 sm:h-40 mb-2"
                    />
                    <p>
                      this is it
                    </p>
                    <div className="flex gap-2 justify-end">
                      <button
                        onClick={() => handleSaveEdit(comment._id)}
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1 rounded"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => {
                          setEditingComment(null);
                          setEditText("");
                        }}
                        className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-1 rounded"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    className="prose max-w-none text-gray-700"
                    dangerouslySetInnerHTML={{ __html: comment.text }}
                  />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comment;
