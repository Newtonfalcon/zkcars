import { Geist, Geist_Mono, Titillium_Web } from "next/font/google";
import "./globals.css";

// Geist Sans
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Geist Mono
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

// Titillium Web
const titillium = Titillium_Web({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  variable: "--font-titillium",
});

export const metadata = {
  metadataBase: new URL("https://zakicars.com"), // change when domain is live

  title: {
    default: "ZK Cars | Premium Automotive Dealership",
    template: "%s | Zk Cars",
  },

  description:
    "ZK Cars is a premium automotive dealership offering luxury electric and fuel vehicles, flexible financing, trade-ins, and expert after-sales support.",

  keywords: [
    "ZK Cars",
    "Car dealership Nigeria",
    "Luxury cars",
    "Electric vehicles Nigeria",
    "Fuel cars",
    "Used cars",
    "Car financing",
    "Auto sales",
  ],

  authors: [{ name: "Zk Cars" }],
  creator: "Zk Cars",

  openGraph: {
    title: "Zk Cars | Premium Automotive Dealership",
    description:
      "Discover premium electric and fuel vehicles with expert support, financing, and after-sales service at Zaki Cars.",
    url: "https://zakicars.com",
    siteName: "Zaki Cars",
    images: [
      {
        url: "/logo.jpeg", // your logo in /public
        width: 1200,
        height: 630,
        alt: "Zk Cars Logo",
      },
    ],
    locale: "en_NG",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Zaki Cars | Premium Automotive Dealership",
    description:
      "Luxury electric and fuel vehicles with flexible financing and expert support.",
    images: ["/logo.jpeg"],
  },

  icons: {
    icon: "/logo.png",
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
        className={`${geistSans.variable} ${geistMono.variable} ${titillium.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
