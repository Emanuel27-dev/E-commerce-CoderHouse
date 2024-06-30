import { Link } from "react-router-dom";
import style from "./../../styles/body/Item.module.css";
import { iconsComponents } from "../../iconsComponents";

export const Item = ({ id, name, image, price, arrayPlatforms }) => {
  return (
    <Link to={`/item/${id}`}>
      <article className={style.card}>
        <figure className={style.cardFigure}>
          <img src={image} className={style.cardImg} />
        </figure>
        <div className={style.cardTexts}>
          <div className={style.cardCon}>
            <h2 className={style.cardName}>{name}</h2>
            <div className={style.cardIcons}>
              {
                // La logica es similar al del componente ItemDetailContainer
                arrayPlatforms
                  ?.map(({ platform }) => {
                    return platform.slug;
                  })
                  ?.map((platformKey) => {
                    if (iconsComponents[platformKey]) {
                      return iconsComponents[platformKey];
                    }
                  })
              }
            </div>
          </div>

          <span className={style.cardPrice}>US${price * 2}.99</span>
        </div>
      </article>
    </Link>
  );
};
