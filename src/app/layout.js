import { Inter } from "next/font/google";
import "./globals.css";
import SuppressOklabErrors from "@/components/SuppressOklabErrors";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yash Raghubanshi | Data Visualization & Analytics",
  description: "Transforming complex data into visual stories.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-black text-white`}>
        <SuppressOklabErrors>{children}</SuppressOklabErrors>
      </body>
    </html>
  );
}
