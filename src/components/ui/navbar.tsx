import { Menu, Search, ShoppingCart,X, ChevronRight } from "lucide-react"; 
import { Link, NavLink, useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useCart } from "../../context/Cartcontext";
import { useState } from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import GetProductQuery from "../../queryOptions/useProductsQuery";
import { useCategories } from "../../hook/useCategories";

interface SearchFormData {
  query: string;
}

export default function Navbar() {
  const { cartItems } = useCart();
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm<SearchFormData>();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { data: products } = useSuspenseQuery(GetProductQuery());
  const categoryList = useCategories();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  const handleSearch = (data: SearchFormData) => {
    navigate(`/?q=${data.query}`);
  };

  const handleMobileCategoryClick = (categoryValue: string | null) => {
    if (categoryValue) {
      navigate(`/?category=${categoryValue}`);
    } else {
      navigate('/');
    }
    setIsMobileMenuOpen(false); 
  };

  return (
    <>
      <nav className="border-b border-slate-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1600px] mx-auto px-4 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="font-semibold text-slate-900 text-lg tracking-tight">
              LOJA MUITO LEGAL
            </span>
            {/* Menu Desktop */}
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
              className="hidden sm:flex items-center bg-slate-50 border border-slate-200 rounded-full px-3 py-1.5 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-200 transition-all"
            >
              <input
                {...register("query")}
                type="text"
                placeholder="Buscar..."
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

            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-slate-400 hover:text-slate-600"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
      {/* Pedi pra ia gerar esse menu de mobile pra quando a tela estiver do tamanho de um celular comum */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 right-0 h-full w-[280px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <span className="font-semibold text-slate-900">Menu</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-slate-400 hover:bg-slate-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-4">
              <div className="mb-6 sm:hidden">
                <form
                  onSubmit={handleSubmit(handleSearch)}
                  className="flex items-center bg-slate-50 border border-slate-200 rounded-lg px-3 py-2"
                >
                  <input
                    {...register("query")}
                    type="text"
                    placeholder="Buscar Produto..."
                    className="bg-transparent border-none outline-none text-sm w-full"
                  />
                  <Search className="w-4 h-4 text-slate-400" />
                </form>
              </div>
              <div className="flex flex-col space-y-2 mb-8 border-b border-slate-100 pb-6">
                <Link 
                  to="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
                >
                  Produtos <ChevronRight className="w-4 h-4 text-slate-300"/>
                </Link>
                <Link 
                  to="/cart" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-between p-2 text-slate-600 hover:bg-slate-50 rounded-lg font-medium"
                >
                  Carrinho <ChevronRight className="w-4 h-4 text-slate-300"/>
                </Link>
              </div>
              <div>
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 px-2">
                  Categorias
                </h3>
                <ul className="space-y-1">
                  <li
                    onClick={() => handleMobileCategoryClick(null)}
                    className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition-all ${
                                !activeCategory ? "bg-blue-50 text-blue-700 font-semibold" : "text-slate-600 hover:bg-slate-50"
                                }`}
                  >
                    <span className="text-sm">Todos os produtos</span>
                    <span className="text-xs px-2 py-0.5 bg-slate-100 rounded-full text-slate-500">
                      {products.length}
                    </span>
                  </li>

                  {categoryList.map((item) => (
                    <li
                      key={item.value}
                      onClick={() => handleMobileCategoryClick(item.value)}
                      className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition-all ${
                                  activeCategory === item.value
                                  ? "bg-blue-50 text-blue-700 font-semibold"
                                  : "text-slate-600 hover:bg-slate-50"
                                  }`}
                    >
                      <span className="text-sm capitalize">{item.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                                        activeCategory === item.value ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-500"
                                        }`}>
                        {item.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
