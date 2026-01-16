import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCatalog from "../components/ui/teste";
import Cart from "../components/screen/cart";
import ProductDetails from "../components/screen/productDetails";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductCatalog/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<h1>Página não encontrada</h1>} />
      </Routes>
    </BrowserRouter>
  );
}
