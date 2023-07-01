import "@/styles/globals.css";

export const metadata = {
  title: "Marvinel Santos",
  description: "Marvinel Torres Santos Portfolio",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
