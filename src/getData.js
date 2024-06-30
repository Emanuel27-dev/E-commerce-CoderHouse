import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./firebase/configuration.js";


// retornamos todos los juegos almacenando en la base de datos
export async function getGames() {
  const games = [];
  const querySnapShot = await getDocs(collection(db, "items"));
  for (let doc of querySnapShot.docs) {
    games.push(doc.data());
  }
  return games;
}

// funcion para obtener el detalle de un juego a traves de su id
export const getGameDetail = async (gameId = 12) => {
  const q = query(collection(db, "items"), where("id", "==", parseInt(gameId)));
  const querySnapShot = await getDocs(q);
  return querySnapShot.docs[0].data();
};
