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
    <div>
      <div className={styles.desktopContainer}>
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
      <div className={styles.mobileContainer}>
        <div className={styles.mobile_btn__list}>
          {items.map((el: any, index: number) => {
            const isActive = index === activeIndex;
            return (
              <div key={index} className={styles.mobile_item}>
                <button
                  className={classNames(
                    className,
                    styles.mobile_btn,
                    isActive ? styles.activeBtn : ""
                  )}
                  onClick={() => setActiveIndex(isActive ? -1 : index)} // повторный клик сворачивает
                >
                  {getTabLabel(el)}
                </button>

                {isActive && (
                  <div className={styles.mobile_сontent}>
                    <ComponentsSelect component={el} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TabProduct;
