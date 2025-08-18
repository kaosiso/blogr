import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const Write = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Build form data if you want to send image + text to backend
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("content", content);
    if (coverImage) formData.append("coverImage", coverImage);

    console.log({
      title,
      category,
      description,
      coverImage,
      content,
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Write a Post</h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <input
          type="text"
          placeholder="Enter your post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        {/* Cover Image */}
        <div>
          <label className="block mb-2 font-medium">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setCoverImage(e.target.files[0])}
            className="w-full border rounded-lg px-4 py-2"
          />
        </div>

        {/* Category */}
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          <option value="">Select category</option>
          <option value="branding">Branding</option>
          <option value="marketing">Marketing</option>
          <option value="design">Design</option>
          <option value="business">Business</option>
        </select>

        {/* Short Description */}
        <textarea
          placeholder="Write a short description..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
          rows={3}
        />

        {/* ReactQuill Editor */}
        <div className="border rounded-lg">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={setContent}
            placeholder="Write your content here..."
            className="h-60"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition w-full"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Write;
