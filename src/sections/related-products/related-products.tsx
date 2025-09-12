"use client";

import { useEffect, useState } from "react";
import styles from "./related-products.module.css";

const RelatedProducts = ({ product_list }: any) => {
  const [data, setData] = useState(undefined);

  useEffect(() => {}, []);

  return <div className={styles.container}></div>;
};

export default RelatedProducts;
