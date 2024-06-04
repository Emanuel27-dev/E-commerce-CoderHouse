import { ItemListContainer } from "./components/body/ItemListContainer";
import { ItemDetailContainer } from "./components/body/ItemDetailContainer";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:plataforma" element={<ItemListContainer />} />
        <Route path="/item/:gameId" element={<ItemDetailContainer />} />
        <Route path="*" element={<h1>404 page not found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
