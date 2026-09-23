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

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://internmatch.college/#website",
      url: "https://internmatch.college/",
      name: "InternMatch AI",
      description:
        "AI-powered internship matching and application support for university students.",
      inLanguage: ["en", "tr", "ar"],
      about: {
        "@id": "https://internmatch.college/#software",
      },
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://internmatch.college/#software",
      name: "InternMatch AI",
      url: "https://internmatch.college/",
      description:
        "AI-powered internship matching and application support for university students.",
      operatingSystem: ["iOS", "Android"],
      applicationCategory: "BusinessApplication",
      inLanguage: ["en", "tr", "ar"],
      isPartOf: {
        "@id": "https://internmatch.college/#website",
      },
    },
  ],
};

export const metadata: Metadata = {
  title: "InternMatch AI â€” Stop Searching. Start Matching.",
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
    "ÃœskÃ¼dar University",
  ],
  authors: [
    { name: "Mohamad Barakat" },
    { name: "Selenur Yurdakul" },
  ],
  creator: "Mohamad Barakat & Selenur Yurdakul",
  openGraph: {
    title: "InternMatch AI â€” Stop Searching. Start Matching.",
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
        alt: "InternMatch AI â€” AI-powered internship matching for university students",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InternMatch AI â€” Stop Searching. Start Matching.",
    description:
      "AI-powered internship matching and application support for university students.",
    images: ["/media/social/internmatch-social-preview.png"],
  },
  icons: {
    icon: {
      url: "/branding/internmatch-search-icon.png",
      type: "image/png",
      sizes: "512x512",
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        {children}
      </body>
    </html>
  );
}
