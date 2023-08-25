import Navbar from "@/components/shared/Navbar";
import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import Footer from "@/components/shared/Footer";
import { cn } from "@/lib/utils";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mimosa | Home",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(baiJamjuree.className, "bg-light text-dark antialiased")}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
