import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import "normalize.css";
import "swiper/css";
import Header from "@/layouts/header/header";
import Footer from "@/layouts/footer/footer";

const manropeSans = Manrope({
  variable: "--font-geist-sans",
  subsets: ["cyrillic"],
});

export const metadata: Metadata = {
  title: "Купите 1С по самым лучшим ценам в 1C-Future",
  description:
    "Купите программы 1С по выгодным ценам в интернет-магазине 1C-Future. У нас вы найдёте полный ассортимент решений 1С для бизнеса: бухгалтерия, управление торговлей, зарплата и кадры, комплексная автоматизация и другие продукты. Мы предлагаем официальные лицензии, профессиональную установку и поддержку. Закажите 1С в 1C-Future — получайте надёжные инструменты для учёта, анализа и развития компании по лучшей стоимости.",
  openGraph: {
    title: "Купите 1С по самым лучшим ценам в 1C-Future",
    description:
      "Купите программы 1С по выгодным ценам в интернет-магазине 1C-Future. У нас вы найдёте полный ассортимент решений 1С для бизнеса: бухгалтерия, управление торговлей, зарплата и кадры, комплексная автоматизация и другие продукты. Мы предлагаем официальные лицензии, профессиональную установку и поддержку. Закажите 1С в 1C-Future — получайте надёжные инструменты для учёта, анализа и развития компании по лучшей стоимости.",
    url: "https://1c-future.ru",
    images: [
      {
        url: "https://1c-future.ru/og-img.jpg", // абсолютный URL
        width: 1200,
        height: 630,
        alt: "1C-Future | Купите 1С ",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={manropeSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
