import { useSuspenseQuery } from "@tanstack/react-query";
import GetProductQuery from "../queryOptions/useProductsQuery";

type CategoryItem = {
  label: string;
  value: string;
  count: number;
};

function capitalize(str: string) {
  return str.replace(/\b\w/g, (l) => l.toUpperCase());
}

export function useCategories() {
  const { data: products } = useSuspenseQuery(GetProductQuery());

  const categoriesMap = products.reduce((acc, product) => {
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
  }, {} as Record<string, CategoryItem>); 

  return Object.values(categoriesMap);
}
