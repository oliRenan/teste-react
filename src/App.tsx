import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import GetProductQuery from "./queryOptions/useProductsQuery";

// const PRODUCT_API_URL = 'https://fakestoreapi.com/products';

function App() {
  const {data}= useSuspenseQuery(GetProductQuery())
  return (
    <>
      <p>Estou vendo algo aqui</p>
      <p>{JSON.stringify(data[0].title,null,2)}</p>
       {/* <div>{data[4]?.category}</div>  */}
    </>
  )
}


export default App
