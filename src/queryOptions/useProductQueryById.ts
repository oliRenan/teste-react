import { queryOptions} from "@tanstack/react-query";
import type { Product } from "../types/productType";

const getProductsById = async (id: number):Promise<Product> => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

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

export default function GetProductQueryById(id:number) {
    return queryOptions({
        queryKey: ['products' ,'detail', id],
        queryFn: ()=> getProductsById(id),
    })
}
