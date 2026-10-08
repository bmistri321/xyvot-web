import { Inter } from "next/font/google";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://www.xyvot.com";
const SITE_NAME = "Xyvot";
const SITE_DESCRIPTION =
  "Xyvot is the instant commerce platform connecting local shops with customers. Groceries and essentials delivered in 15 minutes. Sell online, deliver fast, grow your business.";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Xyvot — Instant Commerce for Local Businesses | 15-Min Delivery",
    template: "%s | Xyvot",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "Xyvot",
    "instant commerce",
    "quick commerce",
    "15 minute delivery",
    "grocery delivery",
    "local shops online",
    "sell online India",
    "delivery partner",
  ],
  authors: [{ name: "Xyvot" }],
  creator: "Xyvot",
  publisher: "Xyvot",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Xyvot — Instant Commerce for Local Businesses",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Xyvot — Instant commerce platform for local businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Xyvot — Instant Commerce for Local Businesses",
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Bishal: paste your Google Search Console verification code here
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Xyvot",
      url: SITE_URL,
      logo: `${SITE_URL}/logo.png`,
      description: SITE_DESCRIPTION,
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "FAQPage",
      "@id": `${SITE_URL}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Xyvot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xyvot is an instant commerce platform that connects local neighbourhood shops with customers. Customers get groceries and daily essentials delivered in about 15 minutes, while merchants get a complete online business platform.",
          },
        },
        {
          "@type": "Question",
          name: "How fast is Xyvot delivery?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xyvot offers 15-minute express delivery from nearby partner shops and dark stores. Every order includes live tracking and a delivery PIN for secure handoff.",
          },
        },
        {
          "@type": "Question",
          name: "How can my shop sell on Xyvot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Visit business.xyvot.com to open your online storefront in minutes. You get inventory management, POS billing, GST-ready invoicing, and automatic rider dispatch — free to start.",
          },
        },
        {
          "@type": "Question",
          name: "How do I become a Xyvot delivery partner?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sign up at rider.xyvot.com. There is zero joining fee. You receive nearby orders matched to your live location, earn transparent per-delivery payouts, and work flexible shifts.",
          },
        },
        {
          "@type": "Question",
          name: "Where does Xyvot operate?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Xyvot currently operates in select neighbourhoods in India, expanding area by area. Check shop.xyvot.com to see if delivery is available in your location.",
          },
        },
        {
          "@type": "Question",
          name: "How do customers log in to Xyvot?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Customers log in with WhatsApp OTP — enter your phone number, receive a code on WhatsApp, and you are in. No passwords to remember.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
