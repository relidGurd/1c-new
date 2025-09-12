import Typography from "@/ui-kit/typography/typography";
import styles from "./product-variants-card.module.css";
import Popup from "../popup/popup";
import ConsultationForm from "@/forms/consultation-form/consultation-form";

const ProductVariantsCard = ({ product }: { product: any }) => {
  return (
    <div className={styles.product_variants_card}>
      <div>
        <Typography variant="p" weight="bold" size="18">
          {product.title}
        </Typography>
      </div>
      <div>
        <Typography variant="p" weight="bold" size="18">
          {product.price} руб.
        </Typography>
      </div>
      <div>
        <Popup button={<button className={styles.popup_btn}>Заказать</button>}>
          <ConsultationForm />
        </Popup>
      </div>
    </div>
  );
};

export default ProductVariantsCard;
