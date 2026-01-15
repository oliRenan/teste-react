import { queryOptions} from "@tanstack/react-query";

type Rating = {
    rate: number;
    count: number;
}

type Product ={
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

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
