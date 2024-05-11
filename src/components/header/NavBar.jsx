import { CartWidget } from "./CartWidget";

export const NavBar = () => {
  return (
    <nav className="container flex justify-between items-center">
      <h1 className="text-[24px] font-[500]">
        <a href="/Home">EpiCSteam</a>
      </h1>
      <ul className="flex gap-8 text-[17px]">
        <li>
          <a href="#">Juegos</a>
        </li>
        <li>
          <a href="#">Tienda</a>
        </li>
        <li>
          <a href="#">Plataformas</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
};
