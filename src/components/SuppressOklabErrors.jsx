"use client";

import { useEffect } from "react";

export default function SuppressOklabErrors({ children }) {
  useEffect(() => {
    const originalError = console.error;
    const originalWarn = console.warn;

    console.error = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("oklab")) return;
      originalError.apply(console, args);
    };
    console.warn = (...args) => {
      if (typeof args[0] === "string" && args[0].includes("oklab")) return;
      originalWarn.apply(console, args);
    };

    return () => {
      console.error = originalError;
      console.warn = originalWarn;
    };
  }, []);

  return children;
}
