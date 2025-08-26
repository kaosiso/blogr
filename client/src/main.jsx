import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./index.css";

import HomePage from "./routes/HomePage";
import PostListPage from "./routes/PostListPage";
import Write from "./routes/Write";
import LoginPage from "./routes/LoginPage";
import RegisterPage from "./routes/RegisterPage";
import SinglePostPage from "./routes/SinglePostPage";
import ProfilePage from "./routes/ProfilePage";
import PublicProfilePage from "./routes/PublicProfilePage";

import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./Context/AuthContext"; // ✅ import your context

// Create the QueryClient
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/posts", element: <PostListPage /> },
      { path: "/posts/:slug", element: <SinglePostPage /> },

      {
        path: "/write",
        element: (
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        ),
      },
      {
        path: "/edit/:slug",
        element: (
          <ProtectedRoute>
            <Write />
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      { path: "/users/:slug", element: <PublicProfilePage /> },
    ],
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/register", element: <RegisterPage /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </AuthProvider>
  </StrictMode>
);
