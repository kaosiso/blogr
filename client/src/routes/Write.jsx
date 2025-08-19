import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast"; // ✅ only toast, Toaster stays in MainLayout

const Write = () => {
  const mutation = useMutation({
    mutationFn: async (formData) => {
      const token = localStorage.getItem("token");
      console.log(token)
      if (!token) throw new Error("No token found");

      return axios.post(`${import.meta.env.VITE_API_URL}/posts`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
    },
  });

  const [form, setForm] = useState({
    title: "",
    category: "",
    description: "",
    coverImage: null,
    content: "",
  });

  const { title, category, description, coverImage, content } = form;

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("content", content);
    if (coverImage) formData.append("coverImage", coverImage);

    mutation.mutate(formData, {
      onSuccess: (res) => {
        toast.success("✅ Post successfully created!");
        setForm({
          title: "",
          category: "",
          description: "",
          coverImage: null,
          content: "",
        });
      },
      onError: (err) => {
        toast.error("❌ Failed to create post");
        console.error(err);
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        Write a Post
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Enter your post title..."
          value={title}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
        />

        <div>
          <label className="block mb-2 font-medium text-sm sm:text-base md:text-lg">
            Cover Image
          </label>
          <input
            type="file"
            name="coverImage"
            accept="image/*"
            onChange={handleChange}
            className="w-full border rounded-lg px-4 py-2 text-sm sm:text-base"
          />
        </div>

        <div className="w-full sm:w-3/4 md:w-1/2 mx-auto">
          <label className="block mb-2 font-medium text-sm sm:text-base md:text-lg">
            Category
          </label>
          <select
            name="category"
            value={category}
            onChange={handleChange}
            className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            <option value="">Select category</option>
            <option value="branding">Branding</option>
            <option value="marketing">Marketing</option>
            <option value="design">Design</option>
            <option value="business">Business</option>
          </select>
        </div>

        <textarea
          name="description"
          placeholder="Write a short description..."
          value={description}
          onChange={handleChange}
          className="w-full border rounded-lg px-4 py-3 text-sm sm:text-base md:text-lg focus:outline-none focus:ring-2 focus:ring-gray-400"
          rows={3}
        />

        <div className="border rounded-lg">
          <ReactQuill
            theme="snow"
            value={content}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, content: value }))
            }
            placeholder="Write your content here..."
            className="h-48 sm:h-60 md:h-72"
          />
        </div>
        <p>this is it</p>
        <button
          type="submit"
          disabled={mutation.isLoading}
          className="bg-black text-white px-6 py-3 text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-800 transition w-full disabled:opacity-50"
        >
          {mutation.isLoading ? "Sending..." : "Send"}
        </button>
      </form>
    </div>
  );
};

export default Write;
