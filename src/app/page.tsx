"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

interface Props {
  children: React.ReactNode;
}

export default function Home({ children }: Props) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const { isAuthenticated } = useSelector((state: any) => state.auth);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/signin"); // Redirect if already authenticated
    } else {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <div>Loading...</div>; // Optional loader
  }

  return <>{children}</>;
}
