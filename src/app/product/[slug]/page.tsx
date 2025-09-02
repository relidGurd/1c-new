import { getProduct } from "@/api/product/product";
import { qweryProduct } from "./helper";
import DynamicProductPage from "@/components/dynamic-pages/product/dynamic-product-page";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const { data } = await getProduct(slug, qweryProduct);

  return (
    <div>
      <DynamicProductPage components={data.tab} />
    </div>
  );
};

export default ProductPage;
