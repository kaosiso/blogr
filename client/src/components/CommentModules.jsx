import { useCallback } from "react";

export const useQuillModules = (quillRef) => {
  // No file uploads needed, so nothing extra here

  // 🔹 Toolbar config with only bold, italic, and link
  return {
    toolbar: {
      container: [["bold", "italic"], ["link"], ["clean"]],
      handlers: {},
    },
  };
};
