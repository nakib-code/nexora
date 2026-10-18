import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

export const metadata: Metadata = {
  title: {
    default: "Nexora Digital — Turn Clicks Into Customers",
    template: "%s | Nexora Digital",
  },
  description:
    "Grow your business with Meta Ads, Google Ads, conversion tracking, video editing, and website design and development.",
  keywords: [
    "Digital Marketing",
    "Meta Ads",
    "Google Ads",
    "Conversion Tracking",
    "Video Editing",
    "Website Development",
  ],
  openGraph: {
    title: "Nexora Digital — Turn Clicks Into Customers",
    description:
      "Performance marketing, creative content and high-performing websites for ambitious businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}