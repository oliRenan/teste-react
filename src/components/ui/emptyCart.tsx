import { ShoppingBag } from "lucide-react";
import Navbar from "./navbar";
import { Link } from "react-router-dom";

export default function EmptyCart() {
  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar/>
      <div className="max-w-[1200px] mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-slate-400" />
        </div>
        <h2 className="text-2xl font-semibold text-slate-900 mb-2">Seu carrinho está vazio</h2>
        <p className="text-slate-500 mb-8">Parece que você ainda não adicionou nenhum item.</p>
        <Link to="/" className="bg-slate-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
          Começar a Comprar
        </Link>
      </div>
    </div>
  );
}
