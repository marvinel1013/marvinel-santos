import Wrapper from "@/components/Wrapper";
import Footer from "@/components/footer/Footer";
import MobileMenu from "@/components/mobile_menu/MobileMenu";
import Navbar from "@/components/navbar/Navbar";
import LeftSideBar from "@/components/sidebar/LeftSideBar";
import RightSideBar from "@/components/sidebar/RightSidBar";
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
        <Wrapper>
          <Navbar />
          <MobileMenu />
          {children}
          <LeftSideBar />
          <RightSideBar />
          <Footer />
        </Wrapper>
      </body>
    </html>
  );
}
