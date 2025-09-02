"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./offers.module.css";
import CategoryCard from "@/components/category-card/category-card";

const Offers = () => {
  return (
    <section className="main-container">
      <div className={styles.offers_section}>
        <div>
          <Typography variant="h2" size="64" weight="bold">
            Программные продукты «1С»
          </Typography>
          <Typography variant="p" size="18" weight="semibold" color="text-gray">
            Повышайте производительность – автоматизируйте бизнес-процессы с
            помощью программ «1С»
          </Typography>
          <div className={styles.offers_btnContainer}>
            <button className={styles.offers_btn}>Заказать консультацию</button>
            <button className={styles.offers_btn}>Смотреть все</button>
          </div>
        </div>
        <ul>
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </ul>
      </div>
    </section>
  );
};

export default Offers;
