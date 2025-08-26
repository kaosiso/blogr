import { useCallback } from "react";
import axios from "axios";
import "../utils/VideoBlot"; // make sure this registers your custom VideoBlot

export const useQuillModules = (quillRef) => {
  // 🔹 Handles both image & video upload
  const uploadAndInsert = useCallback(
    async (file, type) => {
      const quill = quillRef.current?.getEditor();
      if (!quill) return;

      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("No auth token found");

        const formData = new FormData();
        formData.append("file", file);

        // 🚀 Call backend upload route
        const res = await axios.post(
          `${import.meta.env.VITE_API_URL}/posts/upload`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const url = res.data.url; // backend should return ImageKit CDN URL
        const range = quill.getSelection() || {
          index: quill.getLength(),
          length: 0,
        };

        quill.insertEmbed(range.index, type, url);
        quill.setSelection(range.index + 1);
      } catch (err) {
        console.error(`❌ Failed to upload ${type}:`, err);
      }
    },
    [quillRef]
  );

  // 🔹 Image upload
  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.click();
    input.onchange = () => {
      const file = input.files?.[0];
      if (file) uploadAndInsert(file, "image");
    };
  }, [uploadAndInsert]);

  // 🔹 Video upload
  const videoHandler = useCallback(() => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "video/*";
    input.click();
    input.onchange = () => {
      const file = input.files?.[0];
      if (file) uploadAndInsert(file, "video");
    };
  }, [uploadAndInsert]);

  // 🔹 Toolbar config
  return {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, false] }],
        ["bold", "italic", "underline", "strike"],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image", "video"],
        ["clean"],
      ],
      handlers: {
        image: imageHandler,
        video: videoHandler,
      },
    },
  };
};
