"use client";

import { Phone, Instagram, Facebook, Send } from "lucide-react";

export default function FloatingContacts() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 items-center">
      <a
        style={{ animationDelay: "1.3s" }}
        href="https://www.instagram.com/grandclean.uz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="animate-scale-in w-11 h-11 bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600 text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Instagram className="w-5 h-5" />
      </a>

      <a
        style={{ animationDelay: "1.2s" }}
        href="https://facebook.com/grandcleanuz"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="animate-scale-in w-11 h-11 bg-[#1877F2] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Facebook className="w-5 h-5" />
      </a>

      <a
        style={{ animationDelay: "1.1s" }}
        href="https://t.me/GrandCleanUZ"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Telegram"
        className="animate-scale-in w-11 h-11 bg-[#2AABEE] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <Send className="w-5 h-5 -ml-0.5 mt-0.5" />
      </a>

      <a
        style={{ animationDelay: "1s" }}
        href="tel:+998935712151"
        aria-label="Позвонить"
        className="animate-scale-in w-14 h-14 bg-gold text-accent-foreground rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(255,184,0,0.5)] hover:scale-110 transition-transform relative mt-1"
      >
        <div className="absolute inset-0 bg-gold rounded-full animate-ping opacity-60" />
        <Phone className="w-6 h-6 relative z-10 fill-current" />
      </a>
    </div>
  );
}
