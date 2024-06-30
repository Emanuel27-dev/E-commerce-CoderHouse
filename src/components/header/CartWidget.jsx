import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import style from "../../styles/header/CartWidget.module.css";
import { useContext } from "react";
import { cartContext } from "../../context/CartContextProvider";

export const CartWidget = () => {

  const { cartCount } = useContext(cartContext);

  return (
    <div className={style.cart}>
      <a href="#">
        <FontAwesomeIcon icon={faCartShopping} className={style.cartIcon} />
        <span className={style.circle}>{ cartCount }</span>
      </a>
    </div>
  );
};
