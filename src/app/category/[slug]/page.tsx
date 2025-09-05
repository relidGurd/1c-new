import { getCategories } from "@/api/category/category";
import styles from "./page.module.css";
import { qweryCategory } from "./helper";
import Typography from "@/ui-kit/typography/typography";
import ContactUsSection from "@/sections/contact-us-section/contact-us-section";
import CategoryCard from "@/components/category-card/category-card";
import Link from "next/link";

const CategoryPage = async () => {
  const { data } = await getCategories(qweryCategory);

  return (
    <div>
      <section className="main-container">
        {data.map((el: any) => (
          <div key={el.id}>
            <Typography variant="h1" size="64" weight="bold">
              {el.title}
            </Typography>
            <ul className={styles.subcategory_list}>
              {el.subcategories.map((el: any) => (
                <li key={el.id}>
                  <Link href={`/subcategory/${el.slug}`}>
                    <CategoryCard
                      title={el.title}
                      description={el.description}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
      <ContactUsSection />
    </div>
  );
};

export default CategoryPage;
