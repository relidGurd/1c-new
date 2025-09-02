"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./hero-section.module.css";
import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";
import ProductCard from "@/components/product-card/product-card";

const HeroSection = () => {
  return (
    <section className="main-container">
      <div className={styles.hero_mainContainer}>
        <div>
          <Swiper
            className={styles.hero_swiper}
            wrapperTag="ul"
            slidesPerView={1}
            spaceBetween={16}
          >
            <SwiperSlide tag="li">
              <div className={styles.hero_slideItem}>
                <div className={styles.hero_slideImageContainer}>
                  <Image
                    className={styles.hero_slideImage}
                    src={"/ban1.jpg"}
                    fill
                    alt=""
                  />
                </div>
                <div className={styles.hero_slideContent}>
                  <div>
                    <Typography
                      variant="h2"
                      color="white"
                      weight="bold"
                      size="64"
                    >
                      Заголовок 1
                    </Typography>
                    <Typography
                      variant="p"
                      color="white"
                      weight="regular"
                      size="24"
                      className={styles.hero_description}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Alias amet possimus adipisci itaque assumenda minus, ea
                      rerum commodi minima dolore magni provident temporibus
                      nesciunt dignissimos odit voluptatem ab accusantium
                      officia.
                    </Typography>
                  </div>

                  <div>
                    <button className={styles.hero_slideBtn}>
                      Оставить заявку
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide tag="li">
              <div className={styles.hero_slideItem}>
                <div className={styles.hero_slideImageContainer}>
                  <Image
                    className={styles.hero_slideImage}
                    src={"/ban1.jpg"}
                    fill
                    alt=""
                  />
                </div>
                <div className={styles.hero_slideContent}>
                  <div>
                    <Typography
                      variant="h2"
                      color="white"
                      weight="bold"
                      size="64"
                    >
                      Заголовок 1
                    </Typography>
                    <Typography
                      variant="p"
                      color="white"
                      weight="regular"
                      size="24"
                      className={styles.hero_description}
                    >
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Alias amet possimus adipisci itaque assumenda minus, ea
                      rerum commodi minima dolore magni provident temporibus
                      nesciunt dignissimos odit voluptatem ab accusantium
                      officia.
                    </Typography>
                  </div>

                  <div>
                    <button className={styles.hero_slideBtn}>
                      Оставить заявку
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
