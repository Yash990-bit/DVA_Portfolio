"use client";

import { Download, Loader2 } from "lucide-react";
import { useState } from "react";

export default function DownloadResumeButton() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const html2pdf = (await import("html2pdf.js")).default;

      const element = document.getElementById("resume-content");

      const opt = {
        margin: [5, 5, 5, 5],
        filename: "Yash_Raghubanshi_Resume.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          backgroundColor: "#ffffff",
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: { mode: ["avoid-all"] },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (err) {
      console.log("PDF download failed:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white text-sm font-bold rounded-lg hover:bg-cyan-700 active:scale-95 transition-all shadow-md shadow-cyan-600/20 print:hidden cursor-pointer disabled:opacity-60 disabled:cursor-wait"
    >
      {loading ? (
        <Loader2 className="w-4 h-4 animate-spin" />
      ) : (
        <Download className="w-4 h-4" />
      )}
      {loading ? "Generating..." : "Download Resume"}
    </button>
  );
}
