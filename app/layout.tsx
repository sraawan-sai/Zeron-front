import { Inconsolata } from "next/font/google";
import "./globals.css";
import { generateDynamicMetadata } from "@/lib/Metadata";

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
      <body className={`${inconsolata.className} antialiased`}>{children}</body>
    </html>
  );
}
