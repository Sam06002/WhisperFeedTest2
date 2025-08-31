"use client";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import StarBackground from "@/components/StarBackground";

// Functions to generate random credentials
function randomUsername() {
  return "user" + Math.random().toString(36).slice(2, 10);
}

function randomPassword() {
  return (
    Math.random().toString(36).slice(2, 10) +
    Math.random().toString(36).slice(2, 6).toUpperCase()
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
};

/**
 * Signup Page Component
 * 
 * A modern, clean signup page with an animated starfield background.
 * Generates random credentials for anonymous signup with copy functionality.
 * Features smooth animations and transitions for a premium feel.
 */
export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [copiedField, setCopiedField] = useState<null | "username" | "password">(null);
  const [isMounted, setIsMounted] = useState(false);

  // Initialize with random credentials on mount
  useEffect(() => {
    setUsername(randomUsername());
    setPassword(randomPassword());
    setIsMounted(true);
  }, []);

  const handleCopy = (value: string, which: "username" | "password") => {
    navigator.clipboard.writeText(value);
    setCopiedField(which);
    setTimeout(() => setCopiedField(null), 1200);
  };

  const handleRegenerate = () => {
    setUsername(randomUsername());
    setPassword(randomPassword());
  };

  // Don't render on server to avoid hydration mismatch
  if (!isMounted) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative">
      {/* Starry Background */}
      <StarBackground />

      <motion.div
        className="w-full max-w-md relative z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Logo/Branding */}
        <motion.div 
          className="text-center mb-8"
          variants={itemVariants}
        >
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-500">
            WhisperFeed
          </h1>
          <p className="mt-2 text-gray-300">Your anonymous social space</p>
        </motion.div>

        {/* Signup Card */}
        <motion.div 
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden border border-white/20"
          variants={itemVariants}
        >
          <div className="p-8">
            <motion.h2 
              className="text-2xl font-bold text-white mb-6 text-center"
              variants={itemVariants}
            >
              Create Your Account
            </motion.h2>

            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Username Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Your Username
                </label>
                <div className="flex rounded-lg shadow-sm">
                  <input
                    type="text"
                    value={username}
                    readOnly
                    className="flex-1 min-w-0 block w-full px-4 py-3 rounded-l-lg border-0 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(username, "username")}
                    className={`inline-flex items-center px-4 py-2 border-l border-white/10 text-sm font-medium rounded-r-lg transition-colors ${
                      copiedField === "username"
                        ? "bg-green-600 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {copiedField === "username" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </motion.div>

              {/* Password Field */}
              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-200 mb-2">
                  Your Password
                </label>
                <div className="flex rounded-lg shadow-sm">
                  <input
                    type="text"
                    value={password}
                    readOnly
                    className="flex-1 min-w-0 block w-full px-4 py-3 rounded-l-lg border-0 bg-white/5 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-200"
                  />
                  <button
                    type="button"
                    onClick={() => handleCopy(password, "password")}
                    className={`inline-flex items-center px-4 py-2 border-l border-white/10 text-sm font-medium rounded-r-lg transition-colors ${
                      copiedField === "password"
                        ? "bg-green-600 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    {copiedField === "password" ? "✓ Copied" : "Copy"}
                  </button>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div className="pt-2 space-y-4" variants={itemVariants}>
                <button
                  type="button"
                  onClick={handleRegenerate}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
                >
                  Generate New Credentials
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/10"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-gray-900 text-gray-400">
                      Already have an account?
                    </span>
                  </div>
                </div>

                <a
                  href="/login"
                  className="w-full flex justify-center py-3 px-4 border border-white/10 rounded-lg shadow-sm text-sm font-medium text-white bg-transparent hover:bg-white/5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-200"
                >
                  Sign in instead
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Important Notice */}
          <div className="bg-black/30 p-4 border-t border-white/10">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-400">
                  Important Notice
                </h3>
                <div className="mt-2 text-sm text-yellow-300">
                  <p>
                    Please save your credentials in a secure place. If lost, they cannot be recovered.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div 
          className="mt-8 text-center text-sm text-gray-400"
          variants={itemVariants}
        >
          <p>By continuing, you agree to our Terms of Service and Privacy Policy.</p>
          <p className="mt-2">© {new Date().getFullYear()} WhisperFeed. All rights reserved.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
