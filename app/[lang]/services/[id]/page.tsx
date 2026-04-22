import type { Locale } from "@/lib/i18n";
import { locales } from "@/lib/i18n";
import { servicesData, getServiceTranslation } from "@/data/services";
import { notFound } from "next/navigation";
import ServiceDetailClient from "./ServiceDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const params: { lang: string; id: string }[] = [];

  locales.forEach((lang) => {
    servicesData.forEach((service) => {
      params.push({
        lang,
        id: service.id,
      });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    return {};
  }

  const lang = resolvedParams.lang;
  const t = getServiceTranslation(service, lang);

  return {
    title: t.metaTitle,
    description: t.metaDesc,
    alternates: {
      canonical: `https://grandclean.uz/${lang}/services/${service.id}`,
      languages: {
        ru: `https://grandclean.uz/ru/services/${service.id}`,
        uz: `https://grandclean.uz/uz/services/${service.id}`,
      },
    },
    openGraph: {
      title: t.metaTitle,
      description: t.metaDesc,
      url: `https://grandclean.uz/${lang}/services/${service.id}`,
      images: [
        {
          url: `https://grandclean.uz${service.img}`,
        },
      ],
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ lang: Locale; id: string }>;
}) {
  const resolvedParams = await params;
  const service = servicesData.find((s) => s.id === resolvedParams.id);

  if (!service) {
    notFound();
  }

  const lang = resolvedParams.lang;
  const t = getServiceTranslation(service, lang);
  const faqList =
    service.faq[lang as keyof typeof service.faq] || service.faq.ru;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: t.title,
    provider: {
      "@type": "LocalBusiness",
      name: "GrandClean",
    },
    description: t.shortDesc,
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "UZS",
      lowPrice: "15000",
      highPrice: "44000",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqList.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `https://grandclean.uz/${lang}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `https://grandclean.uz/${lang}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: t.title,
        item: `https://grandclean.uz/${lang}/services/${service.id}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServiceDetailClient service={service} lang={lang} />
    </>
  );
}
