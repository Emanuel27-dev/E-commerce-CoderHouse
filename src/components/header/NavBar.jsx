import { Link, NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import platforms from "../../data/platforms.json";
import style from "../../styles/header/NavBar.module.css";

export const NavBar = () => {
  return (
    <div className="container">
      <nav className={style.navbar}>
        <Link to={"/"}>
          <div className={style.logo}>
            <span className={style.epic}>EPIC</span>
            <span className={style.fakes}>FAKES</span>
          </div>
        </Link>
        <ul className={style.platforms}>
          {platforms.map(({ id, name }) => (
            <li key={id}>
              <NavLink to={`/category/${id}`}>{name}</NavLink>
            </li>
          ))}
        </ul>
        <CartWidget />
      </nav>
    </div>
  );
};
