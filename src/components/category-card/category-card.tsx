"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./category-card.module.css";
import Image from "next/image";

const CategoryCard = ({
  title,
  description,
  image,
}: {
  title: string;
  description?: string;
  image?: string;
}) => {
  return (
    <div className={styles.category_card}>
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
          {title}
        </Typography>
        {description && (
          <Typography
            className={styles.category_description}
            variant="p"
            size="18"
          >
            {description}
          </Typography>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
