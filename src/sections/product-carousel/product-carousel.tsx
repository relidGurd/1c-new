"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./product-carousel.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/product-card/product-card";
import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";

const ProductCarousel = ({ products }: { products: any }) => {
  return (
    <section className="main-container">
      <RiseUpAnimation>
        <div className={styles.productCarousel_container}>
          <div>
            <Typography variant="h2" size="64" weight="bold">
              Популярные продукты
            </Typography>
            <Link
              className={styles.productCarousel_lookALl}
              href={"/category/programmnye-produkty-1-s"}
            >
              Смотреть все
            </Link>
          </div>
          <div className={styles.productCarousel_swiperMain}>
            <Swiper
              wrapperTag="ul"
              className="example"
              slidesPerView={1}
              spaceBetween={16}
              autoHeight={true}
              breakpoints={{
                "1024": {
                  slidesPerView: 2,
                },
                "1240": {
                  slidesPerView: 4,
                },
              }}
            >
              {products.map((el: any) => (
                <SwiperSlide style={{ height: "100%" }} tag="li">
                  <Link href={`/product/${el.slug}`}>
                    <ProductCard product={{ ...el }} />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </RiseUpAnimation>
    </section>
  );
};

export default ProductCarousel;
