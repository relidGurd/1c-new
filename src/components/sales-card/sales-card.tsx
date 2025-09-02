"use client";
import Image from "next/image";
import styles from "./sales-card.module.css";
import Typography from "@/ui-kit/typography/typography";

const SalesCard = () => {
  return (
    <div className={styles.sales_card}>
      <div className={styles.sales_card__mainInfo}>
        <div className={styles.sales_card__imageContainer}>
          <Image
            className={styles.sales_card__image}
            src={"/1c-prev.png"}
            width={150}
            height={150}
            alt=""
          />
        </div>
        <div className={styles.sales_card__info}>
          <Typography variant="span" size="12" color="green">
            1С Для любого бизнеса
          </Typography>
          <Typography variant="span" size="18" weight="bold">
            1С-Отчетность
          </Typography>
        </div>
      </div>
      <div className={styles.sales_card__sale}>
        <Typography
          variant="span"
          weight="bold"
          size="16"
          className={styles.sales_card__saleTitle}
        >
          Скидка <br /> 50%
        </Typography>
      </div>
    </div>
  );
};

export default SalesCard;
