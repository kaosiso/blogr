import React, { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useQuillModules } from "./CommentModules";

const Comment = ({ postId }) => {
  const quillRef = useRef(null);
  const modules = useQuillModules(quillRef);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch comments
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

  // Submit new comment
  const handleSubmit = async () => {
    if (!newComment.trim()) return alert("Write something first!");
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/comments/${postId}`,
        { text: newComment }, // match backend field
        { headers: { Authorization: `Bearer ${token}` } }
      );

      // prepend new comment
      setComments([res.data, ...comments]);
      setNewComment("");
    } catch (err) {
      console.error("Failed to submit comment:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (postId) fetchComments();
  }, [postId]);

  return (
    <div className="max-w-4xl mx-auto  sm:px-6 lg:px-8 py-6">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {/* Comment input area */}
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

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div
            key={comment._id || comment.id}
            className="flex space-x-4 bg-white p-4 rounded-lg shadow-sm"
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
                <span className="text-gray-500 text-sm">
                  {new Date(comment.createdAt).toLocaleString() || "Just now"}
                </span>
              </div>
              <div
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: comment.text }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comment;
