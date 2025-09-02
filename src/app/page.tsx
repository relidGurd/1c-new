import ContactUsSection from "@/sections/contact-us-section/contact-us-section";
import HeroSection from "@/sections/hero-section/hero-section";
import NewsSection from "@/sections/news-section/news-section";
import Offers from "@/sections/offers/offers";
import ProductCarousel from "@/sections/product-carousel/product-carousel";
import Special from "@/sections/special/special";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Offers />
      <Special />
      <ProductCarousel />
      <ContactUsSection />
      <NewsSection />
    </main>
  );
}
