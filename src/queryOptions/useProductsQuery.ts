import { queryOptions} from "@tanstack/react-query";
import type { Product } from "../types/types";



const getProducts = async ():Promise<Product[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL);
    return response.json();
}

export default function GetProductQuery() {
    return queryOptions({
        queryKey: ['products'],
        queryFn: getProducts,
    })
}
