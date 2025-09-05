"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./news-section.module.css";
import ProductCard from "@/components/product-card/product-card";

const NewsSection = () => {
  return (
    <section className="main-container">
      <div className={styles.news_section_container}>
        <Typography
          className={styles.news_section__title}
          variant="h2"
          size="64"
          weight="bold"
        >
          Новости 1С
        </Typography>
        {/* <ul className={styles.news_section__grid}>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
          <li>
            <ProductCard />
          </li>
        </ul> */}
      </div>
    </section>
  );
};

export default NewsSection;
