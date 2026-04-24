"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  faq: FaqItem[];
  serviceTitle: string;
}

export default function ServiceFAQ({ faq, serviceTitle }: ServiceFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="container-wide mt-12 md:mt-16 pb-10">
      {/* JSON-LD разметка для SEO и ИИ-поиска */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-3xl mx-auto">
        <div className="mb-10 text-center">
          <span className="inline-block font-display font-semibold text-xs uppercase tracking-[0.2em] text-gold mb-3">
            Вопросы и Ответы
          </span>
          <h2 className="font-display font-bold text-2xl md:text-3xl text-white">
            FAQ — {serviceTitle}
          </h2>
          <p className="text-muted-foreground text-sm mt-3 max-w-xl mx-auto">
            Ответы на самые частые вопросы об этой услуге
          </p>
        </div>

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="rounded-xl border border-white/10 bg-white/5 overflow-hidden transition-colors duration-300 hover:border-gold/30"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="font-display font-semibold text-sm md:text-base text-white leading-snug">
                  {item.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-gold transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed border-t border-white/5 pt-4">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
