import { ItemListContainer } from "./components/body/ItemListContainer";
import { ItemDetailContainer } from "./components/body/ItemDetailContainer";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartContextProvider } from "./context/CartContextProvider";
import { Cart } from "./components/body/Cart";

export default function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:plataforma" element={<ItemListContainer />} />
          <Route path="/item/:gameId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>404 page not found</h1>} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}
