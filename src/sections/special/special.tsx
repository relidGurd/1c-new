"use client";
import styles from "./special.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";
import SalesCard from "@/components/sales-card/sales-card";

const Special = () => {
  return (
    <section className="main-container">
      <div className={styles.special_main}>
        <div className={styles.special_main__bg}>
          <Image
            className={styles.special_main__image}
            src={"/banner-bg.svg"}
            width={1024}
            alt=""
            height={860}
          />
        </div>
        <div className={styles.special_container}>
          <Typography color="white" variant="h2" size="64" weight="bold">
            Специальное предложение
          </Typography>
          <Typography color="white" variant="p" size="18" weight="bold">
            Скидки, привилегии, комбо-программы
          </Typography>
          <div>
            <Swiper
              wrapperTag="ul"
              slidesPerView={1}
              spaceBetween={16}
              breakpoints={{
                "640": {
                  slidesPerView: 1.5,
                },
                "1024": {
                  slidesPerView: 2.5,
                },
                "1240": {
                  slidesPerView: 3.5,
                },
              }}
            >
              <SwiperSlide tag="li">
                <SalesCard />
              </SwiperSlide>
              <SwiperSlide tag="li">
                <SalesCard />
              </SwiperSlide>
              <SwiperSlide tag="li">
                <SalesCard />
              </SwiperSlide>
              <SwiperSlide tag="li">
                <SalesCard />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Special;
