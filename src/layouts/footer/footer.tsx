"use client";

import Image from "next/image";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer_main}>
        <div className="main-container">
          <div className={styles.footer_content}>
            <div className={styles.footer_leftSection}>
              <div>
                <Image src={"/logo1fc.svg"} width={80} alt="" height={80} />
              </div>
              <div></div>
            </div>
            <div className={styles.footer_rightSection}></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
