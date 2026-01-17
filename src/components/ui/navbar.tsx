import { Menu, Search, ShoppingBag, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar(){
  return(
    <>
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-semibold text-slate-900 text-lg tracking-tight">STORE</span>
            <div className="hidden md:flex gap-6 text-sm font-medium text-slate-500">
              <Link to={'/'} className="hover:text-slate-900 transition-colors">Produtos</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-slate-600 cursor-pointer"><Search className="w-5 h-5" /></button>
            <button className="text-slate-400 hover:text-slate-600 hover:cursor-pointer"><ShoppingCart className="w-5 h-5" /></button>
            <button className="md:hidden text-slate-400"><Menu className="w-5 h-5" /></button>
          </div>
        </div>
      </nav>

    </>
  )
}
