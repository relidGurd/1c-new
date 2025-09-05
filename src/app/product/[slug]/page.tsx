import { getProduct } from "@/api/product/product";
import { qweryProduct } from "./helper";
import DynamicProductPage from "@/components/dynamic-pages/product/dynamic-product-page";
import Tab from "@/components/tab-product/tab-product";
import TabProduct from "@/components/tab-product/tab-product";
import ProductClientPage from "@/pages/product/product-page";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const { data } = await getProduct(slug, qweryProduct);

  return (
    <div>
      <ProductClientPage product={data} />
    </div>
  );
};

export default ProductPage;
