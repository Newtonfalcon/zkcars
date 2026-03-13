import { Geist_Mono, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-montserrat",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  metadataBase: new URL("https://zk-cars.vercel.app"),

  title: {
    default: "ZK Motors | Premium Automotive Dealership",
    template: "%s | ZK Motors",
  },

  description:
    "ZK Motors is a premier automotive dealership offering quality vehicles from world-renowned brands across Northern Nigeria, with flexible Hire Purchase financing.",

  keywords: [
    "ZK Motors",
    "Car dealership Nigeria",
    "Luxury cars Northern Nigeria",
    "Electric vehicles Nigeria",
    "Hire Purchase cars Nigeria",
    "Auto sales Kano",
    "ZK Cars",
  ],

  authors: [{ name: "ZK Motors" }],
  creator: "ZK Motors",

  openGraph: {
    title: "ZK Motors | Premium Automotive Dealership",
    description:
      "Premium vehicles from world-renowned brands with flexible Hire Purchase financing across Northern Nigeria.",
    url: "https://zk-cars.vercel.app/",
    siteName: "ZK Motors",
    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "ZK Motors Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ZK Motors | Premium Automotive Dealership",
    description:
      "Premium vehicles with flexible Hire Purchase financing across Northern Nigeria.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/logo.jpeg",
    shortcut: "/logo.jpeg",
    apple: "/logo.jpeg",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}