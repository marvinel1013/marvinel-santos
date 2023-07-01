import Navbar from "@/components/navbar/Navbar";
import { interFont } from "@/fonts/font";
import "@/styles/globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marvinel Santos",
  description: "Marvinel Torres Santos Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={interFont}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
