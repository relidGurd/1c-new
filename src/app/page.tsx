import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";
import { getCategory } from "@/api/category/category";
import { getProducts } from "@/api/product/product";
import { getSubCategories } from "@/api/subcategory/subcategory";
import ContactUsSection from "@/sections/contact-us-section/contact-us-section";
import HeroSection from "@/sections/hero-section/hero-section";
import Offers from "@/sections/offers/offers";
import ProductCarousel from "@/sections/product-carousel/product-carousel";
import Special from "@/sections/special/special";
import qs from "qs";
export default async function Home() {
  const popularProductsQwery = qs.stringify({
    populate: {
      image: true,
    },

    pagination: {
      page: 1,
      pageSize: 5,
    },
  });

  const subcategoriesQwery = qs.stringify({
    populate: {
      image: true,
    },

    pagination: {
      page: 1,
      pageSize: 4,
    },
  });
  const { data: popular_products } = await getProducts(popularProductsQwery);

  const { data: subcategories } = await getSubCategories(subcategoriesQwery);

  return (
    <main>
      <HeroSection hero_product={popular_products[0]} />

      <Offers data={subcategories} />

      <Special />

      <ProductCarousel products={popular_products} />

      <ContactUsSection />

      {/* <NewsSection /> */}
    </main>
  );
}
