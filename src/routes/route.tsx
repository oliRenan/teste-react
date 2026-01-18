import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductCatalog from "../components/ui/teste";
import ProductDetails from "../components/screen/productDetails";
import CartScrenn from "../components/screen/cartScreen";
import NotFound from "../components/screen/notFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<ProductCatalog/>} />
          <Route path="/cart" element={<CartScrenn/>} />
          <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}
