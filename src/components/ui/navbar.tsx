import { Menu, Search, ShoppingBag, ShoppingCart, Trash } from "lucide-react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/Cartcontext";

export default function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();

  const handleSearch = (data) => {
    navigate(`/?q=${data.query}`);
  };

  return (
    <>
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-semibold text-slate-900 text-lg tracking-tight">
              LOJA MUITO LEGAL
            </span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
              <NavLink
                to="/"
                end
                className="text-slate-500 hover:text-blue-900 [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                Produtos
              </NavLink>
              <NavLink
                to="/cart"
                className="text-slate-500 hover:text-blue-900 [&.active]:text-blue-600 [&.active]:font-semibold"
              >
                Carrinho
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <form
              onSubmit={handleSubmit(handleSearch)}
              className="flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200 transition-all"
            >
              <input
                {...register("query")}
                type="text"
                placeholder="Buscar Produto..."
                className="bg-transparent border-none outline-none text-sm text-slate-700 w-24 lg:w-48 placeholder:text-slate-400"
              />
              <button type="submit" className="text-slate-400 hover:text-blue-600 cursor-pointer">
                <Search className="w-5 h-5" />
              </button>
            </form>
            <Link
              to="/cart"
              className="relative text-slate-400 hover:text-slate-600 hover:cursor-pointer"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-blue-300 text-[14px] font-bold text-white">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button className="md:hidden text-slate-400">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
