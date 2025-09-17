"use client";
import classNames from "classnames";
import styles from "./header.module.css";
import Link from "next/link";
import Image from "next/image";
import { BurgerIcon, CloseIcon } from "@/icons/icons";
import { useState } from "react";
import Typography from "@/ui-kit/typography/typography";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

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
                <Link href={"/contacts"}>Контакты</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.header_buttonMain}>
          <button className={styles.header_button}>Оставить заявку</button>
        </div>
      </div>

      <div className={classNames(styles.header_logo__mobile, "main-container")}>
        <Link className={styles.header_logoSection} href={"/"}>
          <Image
            className={styles.header_logo}
            width={80}
            height={80}
            alt="Logo"
            src={"/logo1c.svg"}
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className={styles.header_burger}
        >
          <BurgerIcon />
        </button>
      </div>

      {isOpen && (
        <div className={styles.mobile_menu}>
          <button onClick={() => setIsOpen(false)}>
            <CloseIcon width={32} height={32} />
          </button>
          <nav>
            <ul className={styles.mobile_list}>
              <li>
                <Link href={"/"}>
                  <Typography variant="span" weight="bold" size="32">
                    Главная
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography variant="span" weight="bold" size="32">
                    О нас
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <Typography variant="span" weight="bold" size="32">
                    Партнерам
                  </Typography>
                </Link>
              </li>
              <li>
                <Link href={"/contacts"}>
                  <Typography variant="span" weight="bold" size="32">
                    Контакты
                  </Typography>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
