"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // Redirect to standalone page to avoid API issues
    router.push("/standalone");
  }, [router]);

  return (
    <div className="h-screen w-full flex items-center justify-center bg-custom-background-100">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-custom-primary-100 mx-auto mb-4"></div>
        <p className="text-custom-text-300">Loading...</p>
      </div>
    </div>
  );
}
