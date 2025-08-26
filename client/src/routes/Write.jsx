import { useState, useRef, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import CategorySelect from "../components/CategorySelect";
import { useQuillModules } from "../components/Modules";

const Write = () => {
  const navigate = useNavigate();
  const { slug } = useParams();
  const isEdit = Boolean(slug);

  const { data: existingPost } = useQuery({
    queryKey: ["post", slug],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get(
        `${import.meta.env.VITE_API_URL}/posts/${slug}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      return res.data;
    },
    enabled: isEdit,
  });

  const quillRef = useRef(null);
  const modules = useQuillModules(quillRef);

  const [form, setForm] = useState({
    title: "",
    category: [],
    description: "",
    coverImage: null,
    content: "",
  });

  const { title, category, description, coverImage, content } = form;

  useEffect(() => {
    if (existingPost) {
      setForm({
        title: existingPost.title || "",
        category: existingPost.category || [],
        description: existingPost.description || "",
        coverImage: null,
        content:
          typeof existingPost.content === "string" ? existingPost.content : "",
      });
    }
  }, [existingPost]);

  const mutation = useMutation({
    mutationFn: async ({ formData, status }) => {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("No token found");

      formData.append("status", status);

      if (isEdit) {
        return axios.put(
          `${import.meta.env.VITE_API_URL}/posts/${slug}`,
          formData,
          { headers: { Authorization: `Bearer ${token}` } }
        );
      } else {
        return axios.post(`${import.meta.env.VITE_API_URL}/posts`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
      }
    },
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (status) => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("category", category);
    formData.append("description", description);
    formData.append("content", content);
    if (coverImage) formData.append("coverImage", coverImage);

    mutation.mutate(
      { formData, status },
      {
        onSuccess: (res) => {
          toast.success(
            status === "draft"
              ? "Draft saved successfully!"
              : isEdit
              ? "Post updated!"
              : "Post successfully created!"
          );
          const { slug: newSlug } = res.data;
          if (newSlug && status !== "draft") navigate(`/posts/${newSlug}`);
        },
        onError: (err) => {
          toast.error(
            status === "draft"
              ? "Failed to save draft"
              : isEdit
              ? "Failed to update post"
              : "Failed to create post"
          );
          console.error(err);
        },
      }
    );
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
        {isEdit ? "Edit Post" : "Write a Post"}
      </h1>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
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

        <CategorySelect
          value={form.category}
          onChange={(newCategories) =>
            setForm({ ...form, category: newCategories })
          }
        />

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
            ref={quillRef}
            theme="snow"
            value={content}
            onChange={(value) =>
              setForm((prev) => ({ ...prev, content: value }))
            }
            modules={modules}
            placeholder="Write your content here..."
            className="h-48 sm:h-60 md:h-72"
          />
        </div>
        <p>necessary</p>
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => handleSubmit("draft")}
            disabled={mutation.isLoading}
            className="bg-gray-500 text-white px-6 py-3 text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-600 transition flex-1 disabled:opacity-50"
          >
            {mutation.isLoading ? "Saving..." : "Save Draft"}
          </button>

          <button
            type="button"
            onClick={() => handleSubmit("published")}
            disabled={mutation.isLoading}
            className="bg-black text-white px-6 py-3 text-sm sm:text-base md:text-lg rounded-lg hover:bg-gray-800 transition flex-1 disabled:opacity-50"
          >
            {mutation.isLoading
              ? isEdit
                ? "Updating..."
                : "Sending..."
              : isEdit
              ? "Update"
              : "Publish"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Write;
