"use client";

import React, { useState } from "react";
import styles from "./tab-product.module.css";
import DynamicProductPage from "../dynamic-pages/product/dynamic-product-page";
import ComponentsSelect, {
  getTabLabel,
} from "../components-select/components-select";
import classNames from "classnames";

type Props = {
  items: [];
  tabButton?: string;
  tabInfo?: string;
  className?: string;
};

const TabProduct: React.FC<Props> = ({
  items,
  tabButton,
  tabInfo,
  className,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={classNames(styles.tab_btn__primary)}>
        {items.map((el: any, index: number) => (
          <button
            className={classNames(
              className,
              index === activeIndex ? styles.activeBtn : ""
            )}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {getTabLabel(el)}
          </button>
        ))}
      </div>

      <ComponentsSelect component={items[activeIndex]} />
    </div>
  );
};

export default TabProduct;
