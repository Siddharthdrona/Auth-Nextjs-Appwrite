"use client";

import useAuth from "@/context/useAuth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ProtectedLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const { authStatus } = useAuth();

  useEffect(() => {
    if (!authStatus) {
      router.replace("/login");
    }
  }, [authStatus, router]);

  if (!authStatus) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedLayout;
