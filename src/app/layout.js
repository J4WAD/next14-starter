import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Djaouad Azzouz",
  description: "Portfolio",
  icons: {
    icon: "/favicon.ico",
    // You can add more icon types if needed
    // apple: "/apple-touch-icon.png",
  },
  // You can add more metadata fields as needed
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
      </head>
      <body className={inter.className}>
        <div className="layout">
          <Sidebar />
          {children}
        </div>
      </body>
    </html>
  );
}
