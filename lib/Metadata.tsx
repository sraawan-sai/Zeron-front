import type { Metadata } from "next";

type MetadataParams = {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
};

export function generateDynamicMetadata({
  title = "ZERON",
  description = "Quantify Cyber Risks with Zeron & Bridge trust gaps amongst stakeholders by Transforming Data into Actionable Insights for Informed Cybersecurity Decisions.",
  image = "https://zeron.one/wp-content/uploads/2024/05/Youtube-Cover.png",
  path,
}: MetadataParams = {}): Metadata {
  const fullTitle = title === "ZERON" ? title : `${title} | ZERON`;
  const url = path ? `https://zeron.one/${path}` : "https://zeron.one/";

  return {
    title: fullTitle,
    description,
    icons: {
      icon: [
        {
          url: "/favicon/favicon.ico",
        },
      ],
    },
    metadataBase: new URL("https://zeron.one/"),
    alternates: {
      canonical: url,
    },
    keywords: [
      "cybersecurity",
      "risk management",
      "ZERON",
      "cyber risks",
      "secure",
    ],
    openGraph: {
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 2048,
          height: 1152,
        },
      ],
      url,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      site: "@securezeroc",
      creator: "@securezeron",
      title: fullTitle,
      description,
      images: image,
    },
  };
}
