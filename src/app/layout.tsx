import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const body = Inter({ variable: "--font-body", subsets: ["latin"] });
const display = Poppins({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Garments Accessories, Labels & Packaging`,
    template: `%s | ${site.name}`,
  },
  description:
    "Brainstorm Communications, Dhaka, Bangladesh: woven labels, printed & care labels, hang tags, heat transfers, patches, poly bags and complete garments accessories & packaging since 2013.",
  icons: { icon: "/images/brainstorm-favion.png" },
  openGraph: {
    title: site.name,
    description: site.tagline,
    images: ["/images/handshake.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${body.variable} ${display.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
