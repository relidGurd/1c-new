"use client";

import React, { useState } from "react";
import styles from "./tab-product.module.css";
import DynamicProductPage from "../dynamic-pages/product/dynamic-product-page";
import ComponentsSelect, {
  getTabLabel,
} from "../components-select/components-select";

type Props = {
  items: [];
  tabButton?: string;
  tabInfo?: string;
};

const TabProduct: React.FC<Props> = ({ items, tabButton, tabInfo }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div>
        {items.map((el: any, index: number) => (
          <button key={index} onClick={() => setActiveIndex(index)}>
            {getTabLabel(el)}
          </button>
        ))}
      </div>

      <ComponentsSelect component={items[activeIndex]} />
    </div>
  );
};

export default TabProduct;
