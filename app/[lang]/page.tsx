import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { getDictionary, locales } from "@/lib/i18n";
import HomePageClient from "@/app/components/HomePageClient";

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
  return {
    title: t.meta.defaultTitle,
    description: t.meta.defaultDescription,
    keywords: t.meta.defaultKeywords,
    alternates: {
      canonical: `https://grandclean.uz/${lang}/`,
      languages: {
        "ru-UZ": "https://grandclean.uz/ru/",
        "uz-UZ": "https://grandclean.uz/uz/",
      },
    },
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  return <HomePageClient lang={lang} />;
}
