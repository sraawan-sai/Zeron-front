import { Inconsolata } from "next/font/google";
import "./globals.css";
import { generateDynamicMetadata } from "@/lib/Metadata";
import Footer from "@/components/Footer/Footer";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
import SmoothScroll from "@/utils/SmoothScroll";

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export async function generateMetadata() {
  return generateDynamicMetadata({
    title: "Cyber Risk Quantification Made Simple with Zeron CRPM Platform",
    path: "/",
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.className} flex flex-col min-h-screen relative antialiased`}
      >
        <NavbarWrapper />
        <SmoothScroll>
          <section className="flex-grow mx-auto w-full">{children}</section>
        </SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
