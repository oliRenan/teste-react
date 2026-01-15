import { useSuspenseQuery } from "@tanstack/react-query"
import GetProductQuery from "../../queryOptions/useProductsQuery"
import ProductCard from "./productCard"

export default function ProductList(){
  const {data}= useSuspenseQuery(GetProductQuery())
  return(
    {product.map((product)=>
      <ProductCard key={product.id} product={product} />
    )}

  )
}
