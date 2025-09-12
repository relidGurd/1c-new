"use client";

import ProductVariantsCard from "../product-variants-card/product-variants-card";
import Wysiwig from "../wysiwig/wysiwig";

type Props = {
  component?: any;
};

const ComponentsSelect: React.FC<Props> = ({ component }) => {
  if (!component) {
    return <div>Характреристики не указаны</div>;
  }

  switch (component.__component) {
    case "all.tab-product-variants":
      return (
        <ul>
          {component.variants.map((el: any, index: number) => (
            <li style={{ marginBottom: "10px" }} key={el.id}>
              <ProductVariantsCard product={el} />
            </li>
          ))}
        </ul>
      );
    case "all.tab-related-news":
      return <div>news</div>;
    case "all.tab-description":
      return <Wysiwig elements={component.description} />;
    default:
      return null;
  }
};

export function getTabLabel(item: any): any {
  switch (item.__component) {
    case "all.tab-related-news":
      return "Новости";
    case "all.tab-product-variants":
      return "Варианты";
    case "all.tab-description":
      return "Описание";
    case "all.tab-related-products":
      return "Связанные продукты";
    default:
      return null;
  }
}

export default ComponentsSelect;
