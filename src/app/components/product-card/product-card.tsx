"use client";

import Image from "next/image";
import styles from "./product-card.module.css";
import Typography from "@/app/ui-kit/typography/typography";

const ProductCard = () => {
  return (
    <div className={styles.product_card}>
      <div className={styles.product_card__imageContainer}>
        <Image
          className={styles.product_card__image}
          src={"/test.png"}
          width={500}
          alt=""
          height={500}
        />
      </div>
      <div className={styles.product_card__info}>
        <Typography color="green" variant="span" size="12" weight="bold">
          Рубрика
        </Typography>
        <div>
          <Typography variant="p" size="24" weight="bold">
            Рубрика
          </Typography>
          <Typography variant="p" size="16" weight="regular">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            repellat maiores deleniti incidunt at omnis quibusdam perferendis,
            minima officiis totam? Quisquam voluptatum nesciunt quidem quae
            reprehenderit quibusdam reiciendis aut error!
          </Typography>
        </div>
        <Typography variant="span" size="12" weight="bold">
          22.02.2025
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;
