"use client";
import ConsultationForm from "@/forms/consultation-form/consultation-form";
import styles from "./contact-us-section.module.css";

import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";

const ContactUsSection = () => {
  return (
    <section className="main-container">
      <div className={styles.contact_us_section__main}>
        <div className={styles.contact_us_section__main__bg}>
          <Image
            className={styles.contact_us_section__main__image}
            src={"/spot.svg"}
            width={1024}
            alt=""
            height={860}
          />
        </div>
        <div className={styles.contact_us_section__container}>
          <Typography color="white" variant="h2" size="64" weight="bold">
            Нужна консультация?
          </Typography>
          <Typography color="white" variant="p" size="18" weight="bold">
            Скидки, привилегии, комбо-программы
          </Typography>
          <div>
            <ConsultationForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUsSection;
