"use client";
import ConsultationForm from "@/forms/consultation-form/consultation-form";
import styles from "./contact-us-section.module.css";

import Image from "next/image";
import Typography from "@/ui-kit/typography/typography";
import RiseUpAnimation from "@/animation/rise-up-animation/rise-up-animation";

const ContactUsSection = () => {
  return (
    <section className="main-container">
      <RiseUpAnimation>
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
      </RiseUpAnimation>
    </section>
  );
};

export default ContactUsSection;
