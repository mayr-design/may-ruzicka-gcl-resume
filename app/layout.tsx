import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-figtree",
});

export const metadata: Metadata = {
  title: "Google Creative Lab Applicant — May Ruzicka",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Product Sans & Google Sans via CDN (not on Google Fonts) */}
        <link
          href="https://fonts.cdnfonts.com/css/google-sans"
          rel="stylesheet"
        />
        <link
          href="https://fonts.cdnfonts.com/css/product-sans"
          rel="stylesheet"
        />
      </head>
      <body className={`${figtree.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}