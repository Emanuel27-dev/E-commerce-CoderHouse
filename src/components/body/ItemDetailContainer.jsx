import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getGameDetail } from "../../getData";
import { Loading } from "./Loading";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [gameDetail, setGameDetail] = useState();
  const { gameId } = useParams(); // obteniendo el id del juego

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
        <ItemDetail gameDetail={gameDetail} />
      ) : (
        <Loading type={"spin"} />
      )}
    </>
  );
};
