import type { Metadata } from "next";
import { Bricolage_Grotesque, Cairo } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const cairo = Cairo({
  subsets: ["arabic"],
  display: "swap",
  variable: "--font-cairo",
});

export const metadata: Metadata = {
  title: "InternMatch AI — Stop Searching. Start Matching.",
  description:
    "AI-powered internship matching and application support for university students.",
  metadataBase: new URL("https://internmatch.college"),
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
    url: "https://internmatch.college",
    siteName: "InternMatch AI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/media/social/internmatch-social-preview.png",
        width: 1200,
        height: 798,
        alt: "InternMatch AI — AI-powered internship matching for university students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InternMatch AI — Stop Searching. Start Matching.",
    description:
      "AI-powered internship matching and application support for university students.",
    images: ["/media/social/internmatch-social-preview.png"],
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
    <html lang="en" className={`${bricolage.variable} ${cairo.variable}`}>
      <body className="min-h-screen bg-[#F7F7F5] text-[#171A1C] antialiased selection:bg-[#467A8F] selection:text-white">
        {children}
      </body>
    </html>
  );
}
