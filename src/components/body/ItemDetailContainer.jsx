import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getGameDetail } from "../../getData";
import { Loading } from "./Loading";
import style from "../../styles/body/ItemDetailContainer.module.css";
import { iconsComponents } from "../../iconsComponents";

export const ItemDetailContainer = () => {
  const [gameDetail, setGameDetail] = useState();
  const paragraphRef = useRef(); // referenciando el parrafo para expandir el texto
  const { gameId } = useParams(); // obteniendo el id del juego

  const handleText = (e) => {
    // agregando una clase modificadora para que el resto de la descripcion se pueda ver.
    paragraphRef.current.classList.toggle(`${style.paragraphModified}`);
    if (e.target.textContent === "... leer mas") {
      e.target.textContent = "... leer menos";
    } else {
      e.target.textContent = "... leer mas";
    }
  };

  useEffect(() => {
    // obteniendo los datos del juego en especifico
    getGameDetail(gameId).then((gameDetail) => {
      setGameDetail(gameDetail);
    });
  }, []);

  return (
    <>
      {/* Si gameDetail es undefined, mostramos el componente <Loading /> */}
      {gameDetail ? (
        <div className="container">
          <section className={style.detail}>
            <figure className={style.figure}>
              <img src={gameDetail.background_image} className={style.img} />
            </figure>
            <div className={style.texts}>
              <h1 className={style.nameGame}>{gameDetail.name}</h1>
              <p className={style.paragraph} ref={paragraphRef}>
                {gameDetail.description_raw}
              </p>
              <span className={style.readMoreLess} onClick={handleText}>
                ... leer mas
              </span>
              <div className={style.cont}>
                <span className={style.price}>
                  US${gameDetail.playtime * 2}.99
                </span>
                <div className={style.icons}>
                  {
                    // Logica para mostrar los iconos(plataformas) correspondientes dependiendo del juego, es decir en que plataformas esta disponible el juego

                    // 1.Con el map obtengo el arreglo de las plataformas en las cuales esta dispoble el juego
                    // 2. Despues verifico si cada valor esta disponible en el objeto iconsComponents
                    // 3. Si se verifica, renderizo el componente(ICONS) correspondiente.
                    gameDetail.platforms
                      .map(({ platform }) => {
                        return platform.slug;
                      })
                      .map((platformKey) => {
                        if (iconsComponents[platformKey]) {
                          return iconsComponents[platformKey];
                        }
                      })
                  }
                </div>
              </div>
              <div className={style.buttons}>
                <Link to={"#"} className={style.buttonBuy}>
                  COMPRAR AHORA
                </Link>
                <Link to={"#"} className={style.button}>
                  AÑADIR AL CARRITO
                </Link>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <Loading type={"spin"} />
      )}
    </>
  );
};
