import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary, locales } from "@/lib/i18n";
import { notFound } from "next/navigation";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import FloatingContacts from "@/app/components/FloatingContacts";
import { Toaster } from "sonner";

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang);
  const isRu = lang === "ru";
  return {
    metadataBase: new URL("https://grandclean.uz"),
    title: {
      default: t.meta.defaultTitle,
      template: `%s | GrandClean - Клининг в Ташкенте`,
    },
    description: t.meta.defaultDescription,
    keywords: t.meta.defaultKeywords,
    alternates: {
      canonical: `https://grandclean.uz/${lang}/`,
      languages: {
        ru: `https://grandclean.uz/ru/`,
        uz: `https://grandclean.uz/uz/`,
      },
    },
    openGraph: {
      type: "website",
      url: `https://grandclean.uz/${lang}/`,
      siteName: "GrandClean",
      title: t.meta.defaultTitle,
      description: t.meta.defaultDescription,
      images: [
        {
          url: "https://grandclean.uz/images/og-image.webp",
          width: 1200,
          height: 630,
          alt: "GrandClean — профессиональный клининг в Ташкенте",
        },
      ],
      locale: isRu ? "ru_UZ" : "uz_UZ",
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.defaultTitle,
      description: t.meta.defaultDescription,
    },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://grandclean.uz/#organization",
  name: "GrandClean",
  alternateName: "Гранд Клин",
  description:
    "Профессиональная клининговая компания в Ташкенте. Химчистка ковров и мебели, уборка квартир и офисов, дезинфекция, мойка окон и фасадов.",
  url: "https://grandclean.uz",
  telephone: "+998935712151",
  email: "info@grandclean.uz",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "ул. Жураева 48, Babur Street",
    addressLocality: "Tashkent",
    addressRegion: "Ташкент",
    addressCountry: "UZ",
    postalCode: "100000",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.2995,
    longitude: 69.2401,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "22:00",
    },
  ],
  priceRange: "UZS",
  currenciesAccepted: "UZS",
  paymentAccepted: "Cash, Credit Card, Payme, Click",
  areaServed: [
    { "@type": "City", name: "Chilanzar" },
    { "@type": "City", name: "Mirabad" },
    { "@type": "City", name: "Yunusabad" },
    { "@type": "City", name: "Mirzo Ulugbek" },
    { "@type": "City", name: "Sergeli" },
    { "@type": "City", name: "Yashnabad" },
    { "@type": "City", name: "Uchtepa" },
    { "@type": "City", name: "Almazar" },
    { "@type": "City", name: "Bektemir" },
    { "@type": "City", name: "Shaykhantahur" },
    { "@type": "City", name: "Yakkasaray" },
    { "@type": "City", name: "Yangihayot" },
  ],
  sameAs: [
    "https://www.instagram.com/grandclean.uz",
    "https://t.me/grandclean_uz",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "127",
    bestRating: "5",
    worstRating: "1",
  },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;

  if (!locales.includes(lang)) {
    notFound();
  }

  const t = getDictionary(lang);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <Navigation lang={lang} t={t} />
      <main id="main-content">{children}</main>
      <Footer lang={lang} t={t} />
      <FloatingContacts />
      <Toaster position="top-center" richColors />
    </>
  );
}
