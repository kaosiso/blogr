import React, { useState } from "react";

const CommentInput = ({ onSend }) => {
  const [comment, setComment] = useState("");

  const handleSend = () => {
    if (comment.trim() !== "") {
      onSend(comment);
      setComment("");
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Write a comment..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default CommentInput;
