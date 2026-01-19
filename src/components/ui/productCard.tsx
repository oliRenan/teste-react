import { BadgeCheck, ShoppingCart, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../../context/Cartcontext";

export default function ProductCard({product}) {

  const {addToCart} = useCart()

  const handleAddToCart = (e) => {
    e.preventDefault(); 
    e.stopPropagation(); 

    addToCart(product);
  };

  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden">
        <div className="relative p-6 pb-2">
          <button onClick={handleAddToCart} className="absolute top-3 right-3 text-slate-300 hover:cursor-pointer hover:text-blue-500 hover:bg-blue-50 p-1.5 rounded-full transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
        <div className="relative p-6 pb-2">
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
          />
        </div>
        <div className="p-4 pt-2 flex flex-col flex-1 border-t border-slate-100">
          <h2 className="text-slate-800 text-base leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
            {product.title}
          </h2>
          <div className="flex items-center text-xs text-slate-400 mb-2">
            {product.rating ? (
              <>
                <span className="text-blue-600 font-medium flex items-center mr-1 gap-1">
                  <Star className="w-3 h-3 ml-0.5 fill-current" />
                  {product.rating.rate}
                </span>
              </>
            ) : null}
          </div>
          <div className="mt-auto">
            <div className="flex items-baseline gap-2 mb-1">
              <div className="text-slate-900 font-light text-3xl tracking-tight">
                R$ {product.price}<span className="text-base align-super">90</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

