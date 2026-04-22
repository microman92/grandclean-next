export type Locale = "ru" | "uz";

export const locales: Locale[] = ["ru", "uz"];
export const defaultLocale: Locale = "ru";

export type Messages = {
  meta: {
    defaultTitle: string;
    defaultDescription: string;
    defaultKeywords: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    pricing: string;
    reviews: string;
    contact: string;
    order: string;
  };
  services: {
    pageSubtitle: string;
    pageTitle: string;
    pageDesc: string;
    detailPageBtn: string;
    leaveRequest: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  pricing: {
    pageSubtitle: string;
    pageTitle: string;
    pageDesc: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  reviews: {
    pageSubtitle: string;
    pageTitle: string;
    pageDesc: string;
    ctaTitle: string;
    ctaDesc: string;
  };
  contact: {
    formTitle: string;
    formDesc: string;
    formSuccess: string;
    formName: string;
    formNamePlaceholder: string;
    formPhone: string;
    formPhonePlaceholder: string;
    formService: string;
    formServiceDefault: string;
    formMessage: string;
    formMessagePlaceholder: string;
    formSubmit: string;
  };
};

const messages: Record<Locale, Messages> = {
  ru: {
    meta: {
      defaultTitle: "GrandClean - Профессиональный клининг в Ташкенте",
      defaultDescription:
        "GrandClean - химчистка мебели и ковров, уборка квартир и офисов в Ташкенте.",
      defaultKeywords:
        "клининг ташкент, химчистка мебели, стирка ковров, уборка квартир",
    },
    nav: {
      home: "Главная",
      services: "Услуги",
      about: "О компании",
      pricing: "Цены",
      reviews: "Отзывы",
      contact: "Контакты",
      order: "Заказать уборку",
    },
    services: {
      pageSubtitle: "Каталог услуг",
      pageTitle: "Наши услуги",
      pageDesc:
        "Выберите подходящую услугу для дома или бизнеса. Работаем по всему Ташкенту.",
      detailPageBtn: "Подробнее",
      leaveRequest: "Оставить заявку",
      ctaTitle: "Нужна консультация по услуге?",
      ctaDesc: "Подберем лучшее решение под вашу задачу и бюджет.",
      ctaBtn: "Связаться с нами",
    },
    pricing: {
      pageSubtitle: "Стоимость",
      pageTitle: "Цены на услуги",
      pageDesc:
        "Прозрачные цены без скрытых доплат. Финальная стоимость зависит от объема работ.",
      ctaTitle: "Не нашли нужную цену?",
      ctaDesc: "Напишите нам - посчитаем стоимость под ваш объект.",
      ctaBtn: "Запросить расчет",
    },
    reviews: {
      pageSubtitle: "Отзывы клиентов",
      pageTitle: "Нам доверяют клиенты",
      pageDesc: "Реальные отзывы о нашей работе и качестве сервиса.",
      ctaTitle: "Хотите такой же результат?",
      ctaDesc: "Оставьте заявку, и мы свяжемся с вами в ближайшее время.",
    },
    contact: {
      formTitle: "Свяжитесь с нами",
      formDesc: "Оставьте заявку, и мы перезвоним для уточнения деталей.",
      formSuccess: "Ваша заявка успешно отправлена! Мы скоро свяжемся с вами.",
      formName: "Ваше имя",
      formNamePlaceholder: "Иван Иванов",
      formPhone: "Номер телефона",
      formPhonePlaceholder: "+998 90 123 45 67",
      formService: "Выберите услугу",
      formServiceDefault: "Выберите из списка...",
      formMessage: "Сообщение (необязательно)",
      formMessagePlaceholder: "Напишите, если есть особые пожелания...",
      formSubmit: "Отправить заявку",
    },
  },
  uz: {
    meta: {
      defaultTitle: "GrandClean - Toshkentda professional tozalash",
      defaultDescription:
        "GrandClean - mebel va gilam kimyoviy tozalash, uy va ofis tozalash xizmati.",
      defaultKeywords:
        "toshkent tozalash, mebel tozalash, gilam yuvish, uy tozalash",
    },
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      about: "Biz haqimizda",
      pricing: "Narxlar",
      reviews: "Sharhlar",
      contact: "Kontaktlar",
      order: "Buyurtma berish",
    },
    services: {
      pageSubtitle: "Xizmatlar katalogi",
      pageTitle: "Bizning xizmatlar",
      pageDesc:
        "Uy va biznes uchun mos xizmatni tanlang. Toshkent bo'ylab ishlaymiz.",
      detailPageBtn: "Batafsil",
      leaveRequest: "So'rov qoldirish",
      ctaTitle: "Xizmat bo'yicha maslahat kerakmi?",
      ctaDesc: "Vazifangiz va budjetingizga mos yechimni tavsiya qilamiz.",
      ctaBtn: "Bog'lanish",
    },
    pricing: {
      pageSubtitle: "Narxlar",
      pageTitle: "Xizmatlar narxi",
      pageDesc:
        "Yashirin to'lovlarsiz aniq narxlar. Yakuniy narx ish hajmiga bog'liq.",
      ctaTitle: "Kerakli narx topilmadimi?",
      ctaDesc: "Yozing - obyektingiz uchun narxni hisoblab beramiz.",
      ctaBtn: "Hisob so'rash",
    },
    reviews: {
      pageSubtitle: "Mijozlar fikri",
      pageTitle: "Mijozlar bizga ishonadi",
      pageDesc: "Ishimiz sifati va xizmatimiz haqida haqiqiy sharhlar.",
      ctaTitle: "Siz ham shunday natija xohlaysizmi?",
      ctaDesc: "So'rov qoldiring, tez orada siz bilan bog'lanamiz.",
    },
    contact: {
      formTitle: "Biz bilan bog'laning",
      formDesc: "So'rov qoldiring va biz tez orada sizga qo'ng'iroq qilamiz.",
      formSuccess:
        "So'rov muvaffaqiyatli yuborildi! Tez orada siz bilan bog'lanamiz.",
      formName: "Ismingiz",
      formNamePlaceholder: "Sardor Ahmedov",
      formPhone: "Telefon raqami",
      formPhonePlaceholder: "+998 90 123 45 67",
      formService: "Xizmatni tanlang",
      formServiceDefault: "Ro'yxatdan tanlang...",
      formMessage: "Xabar (ixtiyoriy)",
      formMessagePlaceholder: "Maxsus istaklaringiz bo'lsa, yozib qoldiring...",
      formSubmit: "So'rov yuborish",
    },
  },
};

export function getDictionary(locale: Locale): Messages {
  return messages[locale] ?? messages[defaultLocale];
}
