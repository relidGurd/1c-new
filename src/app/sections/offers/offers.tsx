"use client";
import Typography from "@/app/ui-kit/typography/typography";
import styles from "./offers.module.css";

const Offers = () => {
  return (
    <section className="main-container">
      <div className={styles.offers_section}>
        <div>
          <Typography variant="h2" size="64" weight="bold">
            Программные продукты «1С»
          </Typography>
          <Typography variant="p" size="18" weight="bold">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia,
            obcaecati illo! Quisquam est rem commodi non excepturi in illo porro
            cupiditate, consectetur adipisci aspernatur sint! Architecto a rerum
            iure laborum.
          </Typography>
        </div>
        <div>3</div>
      </div>
    </section>
  );
};

export default Offers;
