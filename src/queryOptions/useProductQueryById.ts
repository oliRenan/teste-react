import { queryOptions} from "@tanstack/react-query";
import type { Product } from "../types/types";

const getProductsById = async (id: number):Promise<Product> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    return response.json();
}

export default function GetProductQueryById(id:number) {
    return queryOptions({
        queryKey: ['products' ,'detail', id],
        queryFn: ()=> getProductsById(id),
    })
}
