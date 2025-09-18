"use client";

import React from "react";
import styles from "./product-page.module.css";
import TabProduct from "@/components/tab-product/tab-product";
import Typography from "@/ui-kit/typography/typography";
import Image from "next/image";
import { strapi_site_url } from "../../../test";
import ConsultationForm from "@/forms/consultation-form/consultation-form";
import ContactUsSection from "@/sections/contact-us-section/contact-us-section";

const ProductClientPage: React.FC<any> = ({ product }) => {
  if (!product) {
    return <div>Товар не найден</div>;
  }

  return (
    <div className={styles.container}>
      <section className="main-container">
        <Typography
          className={styles.title_product}
          variant="h1"
          weight="bold"
          size="64"
        >
          {product.title}
        </Typography>
        <Typography variant="span" color="text-gray" weight="bold" size="16">
          Артикул: {product.article}
        </Typography>
      </section>
      <section className="main-container">
        <div className={styles.product_main__grid}>
          <div>
            <div className={styles.product_main__info}>
              <div className={styles.product_image__container}>
                {product.image ? (
                  <Image
                    className={styles.product_image}
                    src={`${strapi_site_url}${product.image.url}`}
                    width={1000}
                    height={800}
                    alt={product.alternativeText ? product.alternativeText : ""}
                  />
                ) : (
                  "Нет изображения"
                )}
              </div>
              <div className={styles.product_prices}>
                <Typography variant="span" size="18">
                  Описание: {product.description}
                </Typography>

                <Typography variant="span" size="24" weight="bold">
                  Стоимость: {product.price} ₽./мес.
                </Typography>
                <div className={styles.product_btn__container}>
                  <button className={styles.product_btn}>
                    Купить в 1 клик
                  </button>
                </div>
              </div>
            </div>
          </div>

          <TabProduct className={styles.tab_btn} items={product.tab} />
        </div>
      </section>

      <ContactUsSection />
    </div>
  );
};

export default ProductClientPage;
