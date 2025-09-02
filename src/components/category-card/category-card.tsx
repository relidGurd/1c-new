"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./category-card.module.css";
import Image from "next/image";

const CategoryCard = () => {
  return (
    <li className={styles.category_card}>
      <div className={styles.category_imageContainer}>
        <Image
          className={styles.category_image}
          src={"/iconCategory.png"}
          width={100}
          height={100}
          alt=""
        />
      </div>
      <div className={styles.category_info}>
        <Typography
          className={styles.category_title}
          variant="span"
          size="24"
          weight="bold"
        >
          1С:ERP Управление предприятием
        </Typography>
        <Typography
          className={styles.category_description}
          variant="p"
          size="18"
        >
          Решение «1С:Управление предприятием общепита» предназначено для
          автоматизации процессов управления деятельностью независимых и сетевых
          предприятий общественного питания различных форматов и концепций
        </Typography>
      </div>
    </li>
  );
};

export default CategoryCard;
