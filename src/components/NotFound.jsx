import React from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
      <h2 className="text-2xl font-bold mt-4 text-gray-700">Oops! Page Not Found</h2>
      <p className="text-gray-600 mt-2">The page you are looking for doesn’t exist or has been moved.</p>

      <button
        onClick={() => navigate("/")}
        className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition"
      >
        Go Home
      </button>
    </div>
  );
}

export default NotFound