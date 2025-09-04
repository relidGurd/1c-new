"use client";

type Props = {
  component?: any;
};

const ComponentsSelect: React.FC<Props> = ({ component }) => {
  switch (component.__component) {
    case "all.tab-product-variants":
      return <div>variants</div>;
    case "all.tab-related-news":
      return <div>news</div>;
    case "all.tab-description":
      return <div>description</div>;
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
  }
}

export default ComponentsSelect;
