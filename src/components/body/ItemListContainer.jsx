import { useEffect, useState } from "react";
import { getGames } from "../../getData";
import { Item } from "./Item";
import { useParams } from "react-router-dom";
import { Loading } from "./Loading";
import style from "../../styles/body/ItemListContainer.module.css";

export const ItemListContainer = () => {
  // games: es un arreglo donde almacenara objetos y estos tendran informacion del juego respectivo
  const [games, setGames] = useState([]);
  const { plataforma } = useParams(); // 'categoryId'

  useEffect(() => {
    // obteniendo el arreglo con los juegos desde una API
    getGames().then((results) => {
      if (plataforma) {
        // hacemos logica de filtrado por categoria
        const gamesFilter = results.filter(({ platforms }) => {
          return platforms.some(({ platform }) => {
            return platform.slug === plataforma;
          });
        });

        setGames([...gamesFilter]); // seteamos games con los juegos filtrados
      } else {
        console.log("me ejecute");
        setGames([...results]); //mostrar todos los juegos
      }
    });
  }, [plataforma]);


  return (
    <section className="container">
      <div className={style.gridContainer}>
        {games.length === 0 ? (
          <Loading />
        ) : (
          games.map(
            ({
              id,
              name,
              background_image,
              playtime, // considerare este campo como el precio, ya que la API no brinda los precios para los juegos.
              platforms
            }) => (
              <Item
                key={id}
                id={id}
                name={name}
                image={background_image}
                price={playtime}
                arrayPlatforms={platforms} // este arreglo contiene las plataformas en las cuales esta disponible el juego
              />
            )
          )
        )}
      </div>
    </section>
  );
};
