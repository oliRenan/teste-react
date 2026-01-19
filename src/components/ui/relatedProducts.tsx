import { Link } from "react-router-dom";
import StarRating from "./starRating";

export default function RelatedProducts({relProduct}){
  return(
  <Link to={`/product/${relProduct.id}`} key={relProduct.id} className="block group"> 
    <div className="bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden h-full">
      <div className="relative p-6 pb-2">
        <img 
          src={relProduct.image} 
          alt={relProduct.title} 
          className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" 
        />
      </div>

      <div className="p-4 pt-2 flex flex-col flex-1 border-t border-slate-100">
        <span className="text-xs text-slate-500 font-medium uppercase mb-1">{relProduct.category}</span>
        <h2 className="text-slate-800 text-sm font-medium leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
          {relProduct.title}
        </h2>

        <div className="mb-2 mt-1">
          <StarRating rate={relProduct.rating.rate} count={relProduct.rating.count} size="w-3 h-3" />
        </div>

        <div className="mt-auto pt-2">
          <div className="flex items-baseline gap-2">
            <div className="text-slate-900 font-light text-xl tracking-tight">${Number(relProduct.price).toFixed(2)}</div>
          </div>
        </div>
      </div>
    </div>
  </Link>
  )
}
