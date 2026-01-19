import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "../components/screen/productDetails";
import CartScrenn from "../components/screen/cartScreen";
import NotFound from "../components/screen/notFound";
import ProductCatalog from "../components/screen/productCatalog";

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
