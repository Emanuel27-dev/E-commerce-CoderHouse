const API_KEY = '4ce0973bbf9e49c2ab415d8c1a241e94'; // no me roben mi api key tiene request limitados ☹🤣
const path = 'https://api.rawg.io/api/games';

// funcion que obtiene una lista de juegos por defecto mostrara los 32 primero juegos
export const getGames = async (amount = 32) => {
    const response = await fetch(`${path}?key=${API_KEY}&page_size=${amount}`);
    const data = await response.json();
    return data.results;
}


// funcion para obtener el detalle de un juego a traves de su id
export const getGameDetail = async (gameId) => {
    const response = await fetch(`${path}/${gameId}?key=${API_KEY}`);
    const data = await response.json();

    return data;
}

