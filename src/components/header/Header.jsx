import { CartWidget } from "../CartWidget";
import { NavBar } from "../NavBar";

export const Header = () => {
  return (
    <header className="bg-slate-800 pt-[20px] pb-[12px]">
      <div className="container flex justify-between px-4 items-center">
        <h1 className="text-2xl">
          <a href="#">EpiCSteam</a>
        </h1>
        <NavBar />
        <CartWidget />
      </div>
    </header>
  );
};
