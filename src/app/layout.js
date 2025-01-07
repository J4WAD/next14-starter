import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar/Sidebar";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Djaouad Azzouz",
  description: "Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  themeColor: "#000000",
  viewport:
    "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Djaouad Azzouz",
  },
  formatDetection: {
    telephone: false,
  },
  applicationName: "Your Portfolio",
  mobileWebApp: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-arp="">
      <head>
        <link rel="apple-touch-icon" href="/icons/192.png" />
        <Script
          src="https://identity.netlify.com/v1/netlify-identity-widget.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className={inter.className}>
        <div className="layout">
          <Sidebar />
          {children}
        </div>
        <Script id="netlify-identity-widget-setup" strategy="afterInteractive">
          {`
            if (window.netlifyIdentity) {
              window.netlifyIdentity.on("init", user => {
                if (!user) {
                  window.netlifyIdentity.on("login", () => {
                    document.location.href = "/admin/";
                  });
                }
              });
            }
          `}
        </Script>
      </body>
    </html>
  );
}
