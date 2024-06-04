import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import style from "../../styles/header/CartWidget.module.css";

export const CartWidget = () => {
  return (
    <div className={style.cart}>
      <a href="#">
        <FontAwesomeIcon icon={faCartShopping} className={style.cartIcon} />
        <span className={style.circle}>10</span>
      </a>
    </div>
  );
};
