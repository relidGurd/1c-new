"use client";
import classNames from "classnames";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
const Header = () => {
  return (
    <header style={{ marginBottom: "10px", marginTop: "20px" }}>
      <div className={classNames(styles.header_logoMain, "main-container")}>
        <Link className={styles.header_logoSection} href={"/"}>
          <Image
            className={styles.header_logo}
            width={80}
            height={80}
            alt="Logo"
            src={"/logo1c.svg"}
          />
        </Link>

        <div className={styles.header_menuMain}>
          <nav className={styles.header_nav}>
            <ul className={styles.header_ul}>
              <li className={styles.header_li}>
                <Link href={"/category/programmnye-produkty-1-s"}>
                  Программные продукты 1С
                </Link>
              </li>
              <li className={styles.header_li}>
                <Link href={"/"}>О нас</Link>
              </li>
              <li className={styles.header_li}>
                <Link href={"/"}>Партнерам</Link>
              </li>
              <li className={styles.header_li}>
                <Link href={"/"}>Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header_buttonMain}>
          <button className={styles.header_button}>Оставить заявку</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
