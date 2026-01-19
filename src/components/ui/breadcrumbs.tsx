import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const formatCategory = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function Breadcrumbs({productTitle,category}){
  return(
    <>
      <nav className="flex items-center text-xs text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
        <Link to={'/'} className="hover:text-blue-600 transition-colors">Produtos</Link>
        <ChevronRight className="w-3 h-3 mx-2 text-slate-300" />
        {category && (
          <>
            <Link 
              to={`/?category=${category}`} 
              className="hover:text-blue-600 transition-colors font-medium text-slate-600"
            >
              {formatCategory(category)}
            </Link>
          </>
        )}
        <ChevronRight className="w-3 h-3 mx-2 text-slate-300" />
        <span className="text-slate-800 font-medium truncate">{productTitle}</span>
      </nav>
    </>
  )
}
