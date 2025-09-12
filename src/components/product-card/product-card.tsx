"use client";

import Image from "next/image";
import styles from "./product-card.module.css";
import Typography from "@/ui-kit/typography/typography";

const ProductCard = ({ product }: { product: any }) => {
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
        <div>
          <Typography color="green" variant="span" size="12" weight="bold">
            {product.article}
          </Typography>
          <div>
            <Typography variant="p" size="24" weight="bold">
              {product.title}
            </Typography>
            {product.description && (
              <Typography
                className={styles.product_card__description}
                variant="p"
                size="16"
                weight="regular"
              >
                {product.description}
              </Typography>
            )}
          </div>
        </div>

        <Typography color="text-gray" variant="span" size="12" weight="bold">
          Артикул: {product.article}
        </Typography>
      </div>
    </div>
  );
};

export default ProductCard;
