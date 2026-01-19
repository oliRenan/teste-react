import { queryOptions} from "@tanstack/react-query";
import type { Product } from "../types/productType";

const getProducts = async ():Promise<Product[]> => {
    const response = await fetch(import.meta.env.VITE_API_URL);

    if(!response.ok){
        let errorMessage = `Erro ${response.status}: ${response.statusText}`;

        try {
            const errorBody = await response.json();
            if (errorBody && errorBody.message) {
                errorMessage = errorBody.message;
            }
        } catch {
        }

        throw new Error(errorMessage);
    }
    return response.json();
}

export default function GetProductQuery() {
    return queryOptions({
        queryKey: ['products'],
        queryFn: getProducts,
    })
}
