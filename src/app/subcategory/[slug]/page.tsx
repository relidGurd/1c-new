import styles from "./page.module.css";

import ContactUsSection from "@/sections/contact-us-section/contact-us-section";
import qs from "qs";
import { getProducts } from "@/api/product/product";
import { getSubCategory } from "@/api/subcategory/subcategory";
import Typography from "@/ui-kit/typography/typography";
import ProductCard from "@/components/product-card/product-card";
import Link from "next/link";

const SubCategoryPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slugSubCat = (await params).slug;

  const qweryCategory = qs.stringify(
    {
      populate: {
        subcategory: {
          populate: "*",
        },
      },
      filters: {
        subcategory: {
          slug: {
            $eq: slugSubCat,
          },
        },
      },

      pagination: {
        page: 1,
        pageSize: 10,
      },
    },
    { encodeValuesOnly: true }
  );

  const { data } = await getProducts(qweryCategory);
  const { data: subcategory } = await getSubCategory(slugSubCat);

  return (
    <div>
      <section className="main-container">
        <Typography variant="h1" weight="bold" size="64">
          {subcategory.title}
        </Typography>
      </section>
      <section className="main-container">
        <ul className={styles.subcategory_list}>
          {data.map((el: any) => (
            <li key={el.id}>
              <Link href={`/product/${el.slug}`}>
                <ProductCard product={el} />
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <ContactUsSection />
    </div>
  );
};

export default SubCategoryPage;
