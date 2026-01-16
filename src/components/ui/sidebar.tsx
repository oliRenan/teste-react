import { useSuspenseQuery } from "@tanstack/react-query";
import GetProductQuery from "../../queryOptions/useProductsQuery";

export default function Sidebar() {
  const { data: products } = useSuspenseQuery(GetProductQuery());

  const categories = products.reduce((acc, product) => {
    const categoryName = product.category;

    if (!acc[categoryName]) {
      acc[categoryName] = {
        label: capitalize(categoryName), 
        value: categoryName,             
        count: 0
      };
    }

    acc[categoryName].count += 1;
    return acc;
  }, {} as Record<string, { label: string; value: string; count: number }>);

  const categoryList = Object.values(categories);

  return (
    <aside className="hidden lg:block w-64 shrink-0 pr-8 border-r border-slate-100">
      <div className="sticky top-8">

        <div className="mb-8">
          <h3 className="text-slate-900 font-bold text-lg mb-4">Categorias</h3>
          <ul className="space-y-3">

            <li className="flex items-center justify-between group cursor-pointer transition-all">
              <span className="text-slate-600 group-hover:text-blue-600 font-medium">
                Todos os produtos
              </span>
              <span className="text-slate-500 text-xs py-0.5 px-2 ">
                {products.length}
              </span>
            </li>
            {categoryList.map((item) => (
              <li key={item.value} className="flex items-center justify-between group cursor-pointer hover:bg-slate-50 p-2 rounded-md transition-all">
                <span className="text-slate-600 group-hover:text-blue-600 font-medium capitalize">
                  {item.label}
                </span>
                <span className="text-slate-500 text-xs py-0.5 px-2">
                  {item.count}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-slate-900 font-bold text-lg mb-4">Filtrar por Preço</h3>
        </div>
      </div>
    </aside>
  );
}
function capitalize(str: string) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}
