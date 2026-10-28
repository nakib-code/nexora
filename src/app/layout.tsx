
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

import FloatingMenu from "@/components/layout/FloatingMenu";
import Footer from "@/components/layout/footer";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

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
      <body className={`${jakartaSans.variable} antialiased`}>
        <FloatingMenu />

        <div className="site-content">
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
