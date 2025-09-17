"use client";

import Typography from "@/ui-kit/typography/typography";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Contacts: React.FC<any> = ({ title }) => {
  return (
    <div>
      <div className={"main-container"}>
        <Typography variant="h1" weight="bold" size="64">
          Контакты
        </Typography>
      </div>
      <section className="main-container">
        <div className={styles.contacts_container}>
          <div className={styles.contacts_requisites}>
            <Typography variant="h2" weight="bold" size="32">
              ООО "АЙТИ ИНИЦИАТИВА
            </Typography>
            <div className={styles.contacts_requisites__list}>
              <div className={styles.contacts_requisites__item}>
                <div className={styles.contacts_requisites__imageContainer}>
                  <Image
                    className={styles.contacts_requisites__image}
                    src={"/PinMapFill.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <Typography variant="span" size="18" weight="bold">
                  г. Москва, вн.тер.г. Муниципальный округ Бутырский, ул.
                  Складочная, д. 1, стр. 18
                </Typography>
              </div>
              <div className={styles.contacts_requisites__item}>
                <div className={styles.contacts_requisites__imageContainer}>
                  <Image
                    className={styles.contacts_requisites__image}
                    src={"/TelephonePlusFill.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <Link href={"tel:+4993913354"}>
                  <Typography variant="span" size="18" weight="bold">
                    +7 499 391-33-54
                  </Typography>
                </Link>
              </div>

              <div className={styles.contacts_requisites__item}>
                <div className={styles.contacts_requisites__imageContainer}>
                  <Image
                    className={styles.contacts_requisites__image}
                    src={"/SendPlusFill.svg"}
                    width={50}
                    height={50}
                    alt=""
                  />
                </div>
                <Link href={"mailto:info@initai.ru"}>
                  <Typography variant="span" size="18" weight="bold">
                    info@initai.ru
                  </Typography>
                </Link>
              </div>

              <div style={{ marginTop: "20px" }}>
                <Typography variant="h3" size="24" weight="bold">
                  Реквизиты
                </Typography>
                <div className={styles.contacts_requisites__info}>
                  <div className={styles.contacts_requisites__item}>
                    <div>
                      <Typography variant="span" size="18" weight="bold">
                        ИНН:
                      </Typography>
                    </div>

                    <Typography variant="span" size="18">
                      9715483183
                    </Typography>
                  </div>
                  <div className={styles.contacts_requisites__item}>
                    <div>
                      <Typography variant="span" size="18" weight="bold">
                        ОГРН:
                      </Typography>
                    </div>

                    <Typography variant="span" size="18">
                      1247700379024
                    </Typography>
                  </div>
                  <div className={styles.contacts_requisites__item}>
                    <div>
                      <Typography variant="span" size="18" weight="bold">
                        КПП:
                      </Typography>
                    </div>

                    <Typography variant="span" size="18">
                      771501001
                    </Typography>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.contacts_map}>
            <iframe
              src="https://yandex.ru/map-widget/v1/?ll=37.592672%2C55.800925&mode=whatshere&whatshere%5Bpoint%5D=37.592628%2C55.800933&whatshere%5Bzoom%5D=21&z=21"
              width="560"
              height="400"
              style={{
                border: "none",
                width: "100%",
                height: "450px",
                borderRadius: "10px",
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
