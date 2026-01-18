import { Menu, Search, ShoppingBag, ShoppingCart, Trash } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "../../context/context"; 

export default function Navbar() {
  const { clearCart, cartItems} = useCart();

  return (
    <>
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-semibold text-slate-900 text-lg tracking-tight">STORE</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
              <NavLink
                to="/"
                end
                className="text-slate-500 hover:text-slate-900 [&.active]:text-slate-900 [&.active]:font-semibold"
              >
               Produtos 
              </NavLink>
              <NavLink
                to="/cart"
                className="text-slate-500 hover:text-slate-900 [&.active]:text-slate-900 [&.active]:font-semibold"
              >
                Carrinho
              </NavLink>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600 cursor-pointer">
              <Search className="w-6 h-6" />
            </button>
            <Link to="/cart" className="relative text-slate-400 hover:text-slate-600 hover:cursor-pointer">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length> 0 && (
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[14px] font-bold text-white">
                  {cartItems.length}
                </span>
              )}
            </Link>

            <button onClick={() => clearCart()} className="text-slate-400 hover:text-slate-600 hover:cursor-pointer">
              <Trash className="w-5 h-5" />
            </button>

            <button className="md:hidden text-slate-400">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
