import { getProduct } from "@/api/product/product";
import { qweryProduct } from "./helper";
import ProductClientPage from "@/pages/product/product-page";

const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const slug = (await params).slug;

  const { data } = await getProduct(slug, qweryProduct);

  console.log(data);
  return (
    <div>
      <ProductClientPage product={data} />
    </div>
  );
};

export default ProductPage;
