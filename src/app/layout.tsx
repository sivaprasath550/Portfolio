import type { Metadata } from "next";
import { Chakra_Petch, Inter_Tight, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const chakraPetch = Chakra_Petch({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-chakra",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter-tight",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-ibm-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Siva Prasath K \u2014 Backend & Systems Engineer",
  description:
    "Backend & systems engineer with an embedded-hardware background. Merged PR in Supabase (35k\u2605), Docker-sandboxed code execution, shipped government portal, ESP32 medical device.",
  metadataBase: new URL("https://sivaprasath.dev"),
  openGraph: {
    title: "Siva Prasath K \u2014 Backend & Systems Engineer",
    description:
      "Backend & systems engineer. Merged PR in Supabase (35k\u2605), Docker-sandboxed code execution, ESP32 medical device.",
    url: "https://sivaprasath.dev",
    siteName: "Siva Prasath K",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Siva Prasath K \u2014 Backend & Systems Engineer",
    description:
      "Backend & systems engineer. Merged PR in Supabase (35k\u2605), Docker-sandboxed code execution, ESP32 medical device.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${chakraPetch.variable} ${interTight.variable} ${ibmPlexMono.variable}`}
    >
      <body className="font-sans leading-[1.65] overflow-x-hidden text-base">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        {children}

        {/* JSON-LD Person Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Siva Prasath K",
              url: "https://sivaprasath.dev",
              jobTitle: "Backend & Systems Engineer",
              alumniOf: {
                "@type": "CollegeOrUniversity",
                name: "SRM Institute of Science and Technology",
              },
              sameAs: [
                "https://github.com/sivaprasath550",
                "https://linkedin.com/in/siva-prasath550",
                "https://leetcode.com/u/D754nf7hk1/",
                "https://codeforces.com/profile/siva_prasath",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
