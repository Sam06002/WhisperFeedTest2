"use client";
import { useEffect } from "react";

/**
 * Root page that redirects to the signup page
 * This is the entry point of the application
 */
export default function Home() {
  useEffect(() => {
    // Redirect to signup page on initial load
    window.location.href = "/signup";
  }, []);
  
  // Show nothing while redirecting
  return null;
}