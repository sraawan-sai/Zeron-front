// import { Inconsolata } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { generateDynamicMetadata } from "@/lib/Metadata";
import Footer from "@/components/Footer/Footer";
import NavbarWrapper from "@/components/Navbar/NavbarWrapper";
import SmoothScroll from "@/utils/SmoothScroll";

// const inconsolata = Inconsolata({
//   variable: "--font-inconsolata",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
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
        className={`${poppins.className} flex flex-col min-h-screen relative antialiased`}
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
