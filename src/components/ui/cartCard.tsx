import { Link } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/Cartcontext";

export default function CartCard({item}) {
    const { 
        removeFromCart, 
        updateCartItemQuantity, 
    } = useCart();

  return (
    <div key={item.id} className="group relative flex flex-col sm:grid sm:grid-cols-12 gap-6 sm:items-center border-b border-slate-100 pb-6 last:border-0">

      <div className="col-span-6 flex items-start gap-4">
        <div className="w-20 h-24 bg-white border border-slate-200 rounded-lg p-2 flex-shrink-0 flex items-center justify-center">
          <img 
            src={item.image} 
            alt={item.title} 
            className="w-full h-full object-contain mix-blend-multiply" 
          />
        </div>
        <div className="flex flex-col pt-1">
          <Link to={`/product/${item.id}`} className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors mb-1 line-clamp-2">
            {item.title}
          </Link>
          <p className="text-xs text-slate-500 mb-2 capitalize">
            {item.category}
          </p>
          <p className="text-sm font-medium text-slate-900 sm:hidden">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-start sm:justify-center mt-2 sm:mt-0">
        <div className="flex items-center border border-slate-200 rounded-lg h-9 w-28 bg-white">
          <button 
            onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="w-9 h-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg transition-colors"
          >
            <Minus className="w-3 h-3" />
          </button>
          <input 
            type="number" 
            value={item.quantity} 
            readOnly
            className="w-full h-full text-center text-sm text-slate-900 font-medium focus:outline-none border-x border-slate-100 p-0 appearance-none" 
          />
          <button 
            onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
            className="w-9 h-full flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-r-lg transition-colors"
          >
            <Plus className="w-3 h-3" />
          </button>
        </div>
      </div>
      <div className="col-span-3 flex items-center justify-between sm:justify-end gap-6 mt-2 sm:mt-0">
        <div className="text-right hidden sm:block">
          <span className="text-xl font-medium text-slate-900 block">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
          {item.quantity > 1 && (
            <span className="block text-[14px] text-slate-400">
              ${item.price.toFixed(2)} un.
            </span>
          )}
        </div>
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-slate-400 hover:text-red-600 transition-colors p-2 hover:bg-red-50 hover:cursor-pointer rounded-full" 
          title="Remover item"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

