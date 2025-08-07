"use client";
import React, { useState } from "react";

// Functions to generate random credentials
function randomUsername() {
  return "user" + Math.random().toString(36).slice(2, 10);
}
function randomPassword() {
  return Math.random().toString(36).slice(2, 10) + Math.random().toString(36).slice(2, 6).toUpperCase();
}

export default function SignupPage() {
  const [username, setUsername] = useState(randomUsername());
  const [password, setPassword] = useState(randomPassword());
  const [copiedField, setCopiedField] = useState<null | "username" | "password">(null);

  function handleCopy(value: string, which: "username" | "password") {
    navigator.clipboard.writeText(value);
    setCopiedField(which);
    setTimeout(() => setCopiedField(null), 1200);
  }

  function handleRegenerate() {
    setUsername(randomUsername());
    setPassword(randomPassword());
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-lg shadow p-6 max-w-md w-full">
        <h1 className="text-2xl font-extrabold mb-6 text-center">Anonymous Sign Up</h1>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Random Username</label>
          <div className="flex gap-2">
            <input 
              className="flex-1 px-3 py-2 border rounded bg-gray-50" 
              value={username} 
              readOnly 
            />
            <button
              type="button"
              className={`px-4 py-2 rounded text-white font-medium ${
                copiedField === "username" ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
              } transition-colors`}
              onClick={() => handleCopy(username, "username")}
            >
              {copiedField === "username" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Random Password</label>
          <div className="flex gap-2">
            <input 
              className="flex-1 px-3 py-2 border rounded bg-gray-50" 
              value={password} 
              readOnly 
              type="text" 
            />
            <button
              type="button"
              className={`px-4 py-2 rounded text-white font-medium ${
                copiedField === "password" ? "bg-green-600" : "bg-indigo-600 hover:bg-indigo-700"
              } transition-colors`}
              onClick={() => handleCopy(password, "password")}
            >
              {copiedField === "password" ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
        <div className="mb-6">
          <button
            type="button"
            className="w-full py-2 px-4 rounded-md font-medium bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors"
            onClick={handleRegenerate}
          >
            Regenerate Credentials
          </button>
        </div>
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-sm text-red-700">
          <p className="font-medium">Important:</p>
          <p>Please copy and save these credentials now. If you lose them, you will not be able to log in or recover your account.</p>
        </div>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
