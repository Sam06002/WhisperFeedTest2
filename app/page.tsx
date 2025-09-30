"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

/**
 * Root page that redirects to the signup page
 * This is the entry point of the application
 */
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to signup page on initial load
    router.push("/signup");
  }, [router]);

  // Show nothing while redirecting
  return null;
}