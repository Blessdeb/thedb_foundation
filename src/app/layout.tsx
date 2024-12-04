import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--poppins",
});

export const metadata: Metadata = {
  title:
    "Deborah Bless Foundation - EMPOWERING LIVES, FIGHTING MALNUTRITION, REDUCING CHILD MORTALITY",
  description:
    "Our mission at The Deborah Bless Foundation is to provide, nurture, and cater to those in need, ensuring that every child has the chance to thrive. Whether it’s reducing infant mortality, supporting vocational training, or spreading the message of Jesus Christ and His love, our programs aim to inspire change that lasts",
  openGraph: {
    title:
      "Deborah Bless Foundation - EMPOWERING LIVES, FIGHTING MALNUTRITION, REDUCING CHILD MORTALITY",
    description:
      "Our mission at The Deborah Bless Foundation is to provide, nurture, and cater to those in need, ensuring that every child has the chance to thrive. Whether it’s reducing infant mortality, supporting vocational training, or spreading the message of Jesus Christ and His love, our programs aim to inspire change that lasts",
    url: "https://www.deborahblessfoundation.com/",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/dci2ylcbr/image/upload/v1733223246/twitter-card_r8sjud.png",
        width: 1200,
        height: 630,
        alt: "A SNEAK PEAK OF THE SITE",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Deborah Bless Foundation - EMPOWERING LIVES, FIGHTING MALNUTRITION, REDUCING CHILD MORTALITY",
    description:
      "Our mission at The Deborah Bless Foundation is to provide, nurture, and cater to those in need, ensuring that every child has the chance to thrive. Whether it’s reducing infant mortality, supporting vocational training, or spreading the message of Jesus Christ and His love, our programs aim to inspire change that lasts",
    images: [
      {
        url: "https://res.cloudinary.com/dci2ylcbr/image/upload/v1733223246/twitter-card_r8sjud.png",
        alt: "A SNEAK PEAK OF THE SITE",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Deborah Bless Foundation",
    url: "https://www.deborahblessfoundation.com",
    logo: "https://res.cloudinary.com/dci2ylcbr/image/upload/v1733223246/twitter-card_r8sjud.png",
    description:
      "Our mission at The Deborah Bless Foundation is to provide, nurture, and cater to those in need, ensuring that every child has the chance to thrive.",
    sameAs: [
      "https://www.facebook.com/profile.php?id=61558369198106",
      "https://twitter.com/Dblessdevotion",
      "https://www.instagram.com/dblessdevotion",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+234-9016 292 9162",
        contactType: "Customer Support",
        areaServed: "Global",
        availableLanguage: ["English"],
      },
    ],
  };

  return (
    <html lang="en" className={`${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-poppins">{children}</body>
    </html>
  );
}
