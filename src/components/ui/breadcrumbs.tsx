import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({productTitle}){
  return(
    <>
        <nav className="flex items-center text-xs text-slate-500 mb-8 overflow-x-auto no-scrollbar whitespace-nowrap">
          <a href="#" className="hover:text-blue-600 transition-colors">Produtos</a>
          <ChevronRight className="w-3 h-3 mx-2 text-slate-300" />
          <a href="#" className="hover:text-blue-600 transition-colors">Men's Clothing</a>
          <ChevronRight className="w-3 h-3 mx-2 text-slate-300" />
          <span className="text-slate-800 font-medium truncate">{productTitle}</span>
        </nav>
    </>
  )
}
