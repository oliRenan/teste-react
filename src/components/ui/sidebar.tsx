import { useSearchParams } from "react-router-dom";
import { useSuspenseQuery } from "@tanstack/react-query";
import GetProductQuery from "../../queryOptions/useProductsQuery";
import { useCategories } from "../../hook/useCategories";

export default function Sidebar() {
  const { data: products } = useSuspenseQuery(GetProductQuery());
  
  const categoryList = useCategories();
  
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category"); 

  const handleCategoryChange = (categoryValue) => {
    setSearchParams((prev) => {
      if (categoryValue) {
        prev.set("category", categoryValue);
      } else {
        prev.delete("category"); 
      }
      return prev;
    });
  };

  return (
    <aside className="hidden lg:block w-64 shrink-0 pr-8 border-r border-slate-100">
      <div className="sticky top-24"> 
        
        <div className="mb-8">
          <h3 className="text-slate-900 font-bold text-lg mb-4">Categorias</h3>
          <ul className="space-y-1"> 
            <li 
              onClick={() => handleCategoryChange(null)}
              className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition-all ${
                !activeCategory ? " text-blue-700 font-semibold" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              <span className="capitalize">Todos os produtos</span>
              <span className="text-xs px-2 py-0.5 rounded-full text-slate-500">
                {products.length}
              </span>
            </li>

            {categoryList.map((item) => (
              <li
                key={item.value}
                onClick={() => handleCategoryChange(item.value)}
                className={`flex items-center justify-between cursor-pointer p-2 rounded-md transition-all ${
                  activeCategory === item.value 
                    ? "text-blue-700 font-semibold" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                }`}
              >
                <span className="capitalize">{item.label}</span>
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
    </aside>
  );
}
