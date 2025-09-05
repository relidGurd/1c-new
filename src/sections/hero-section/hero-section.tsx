"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./hero-section.module.css";
import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";
import ProductCard from "@/components/product-card/product-card";
import Popup from "@/components/popup/popup";
import ConsultationForm from "@/forms/consultation-form/consultation-form";
import { delay } from "motion";

const HeroSection = ({ hero_product }: { hero_product: any }) => {
  return (
    <section className="main-container">
      <div className={styles.hero_mainContainer}>
        <div>
          <Swiper
            modules={[Autoplay]}
            className={styles.hero_swiper}
            wrapperTag="ul"
            slidesPerView={1}
            spaceBetween={16}
            autoplay={{
              delay: 5000,
            }}
            loop={true}
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
                    <Popup
                      button={
                        <button className={styles.hero_slideBtn}>
                          Оставить заявку
                        </button>
                      }
                    >
                      <ConsultationForm />
                    </Popup>
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
                    <Popup
                      button={
                        <button className={styles.hero_slideBtn}>
                          Оставить заявку
                        </button>
                      }
                    >
                      <ConsultationForm />
                    </Popup>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <ProductCard product={hero_product} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
