import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "InternMatch AI — Stop Searching. Start Matching.",
  description:
    "AI-powered internship matching and application support for university students.",
  metadataBase: new URL("https://internmatch.ai"),
  keywords: [
    "Internship Matching",
    "AI Internships",
    "University Students",
    "CV Analysis",
    "Student Career Support",
    "AISS Club",
    "Üsküdar University",
  ],
  authors: [
    { name: "Mohamad Barakat" },
    { name: "Selenur Yurdakul" },
  ],
  creator: "Mohamad Barakat & Selenur Yurdakul",
  openGraph: {
    title: "InternMatch AI — Stop Searching. Start Matching.",
    description:
      "AI-powered internship matching and application support for university students.",
    url: "https://internmatch.ai",
    siteName: "InternMatch AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/branding/internmatch-icon.png",
        width: 500,
        height: 500,
        alt: "InternMatch AI Icon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InternMatch AI — Stop Searching. Start Matching.",
    description:
      "AI-powered internship matching and application support for university students.",
    images: ["/branding/internmatch-icon.png"],
  },
  icons: {
    icon: "/branding/internmatch-icon.png",
    apple: "/branding/internmatch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} font-sans`}>
      <body className="min-h-screen bg-[#F7F7F5] text-[#171A1C] antialiased selection:bg-[#467A8F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
