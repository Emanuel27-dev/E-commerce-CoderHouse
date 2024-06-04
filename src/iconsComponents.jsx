// Las siguientes importaciones son para los ICONOS
import { FaXbox, FaWindows, FaPlaystation, FaApple } from "react-icons/fa";
import { BsNintendoSwitch } from "react-icons/bs";
import { DiAndroid } from "react-icons/di";



// Con este objeto tendre una llave que represente el componente de mi icono que quiero renderizar.
// NOTA: el archivo debe ser jsx porque los valores del objeto son componentes.
export const iconsComponents = {
    'pc': <FaWindows />,
    'playstation4': <FaPlaystation />,
    'nintendo-switch': <BsNintendoSwitch />,
    'android': <DiAndroid />,
    'ios': <FaApple />,
    'xbox-one':<FaXbox />
}