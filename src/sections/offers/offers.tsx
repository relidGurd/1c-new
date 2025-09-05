"use client";
import Typography from "@/ui-kit/typography/typography";
import styles from "./offers.module.css";
import CategoryCard from "@/components/category-card/category-card";
import Link from "next/link";

const Offers = ({ data }: { data: any }) => {
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
            <Link
              className={styles.offers_btn}
              href={"/category/programmnye-produkty-1-s"}
            >
              Смотреть все
            </Link>
          </div>
        </div>
        <ul>
          {data.map((el: any) => (
            <li key={el.id}>
              <Link href={`/subcategory/${el.slug}`}>
                <CategoryCard title={el.title} description={el.description} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offers;
