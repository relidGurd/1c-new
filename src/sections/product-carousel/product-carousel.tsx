"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./product-carousel.module.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "@/components/product-card/product-card";

const ProductCarousel = () => {
  return (
    <section className="main-container">
      <div className={styles.productCarousel_container}>
        <div>
          <Typography variant="h2" size="64" weight="bold">
            Кассовое оборудование
          </Typography>
          <Link href={"/"}>Смотреть все</Link>
        </div>
        <div className={styles.productCarousel_swiperMain}>
          <Swiper
            wrapperTag="ul"
            slidesPerView={1}
            spaceBetween={16}
            breakpoints={{
              "1024": {
                slidesPerView: 2,
              },
              "1240": {
                slidesPerView: 4,
              },
            }}
          >
            <SwiperSlide tag="li">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <ProductCard />
            </SwiperSlide>
            <SwiperSlide tag="li">
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
