"use client";

import styles from "./wysiwig.module.css";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

const Wysiwig: React.FC<any> = ({ elements }) => {
  return (
    <div className={styles.wysiwig_container}>
      <BlocksRenderer
        content={elements}
        blocks={{
          paragraph: ({ children }) => <p>{children}</p>,
          heading: ({ children, level }) => {
            const Tag: any = `h${level}`;
            return <Tag style={{ fontWeight: "bold" }}>{children}</Tag>;
          },
          list: ({ children, format }) =>
            format === "ordered" ? <ol>{children}</ol> : <ul>{children}</ul>,
          link: ({ children, url }) => (
            <a href={url} target="_blank" rel="noopener noreferrer">
              {children}
            </a>
          ),
        }}
      />
    </div>
  );
};

export default Wysiwig;
