const DynamicProductPage = ({ components }: { components: any }) => {
  return components.map((el: any, index: number) => {
    switch (el.__component) {
      case "all.tab-product-variants":
        return <div key={index}>variants</div>;
      case "all.tab-related-news":
        return <div key={index}>news</div>;
      case "all.tab-description":
        return <div key={index}>description</div>;
    }
  });
};

export default DynamicProductPage;
