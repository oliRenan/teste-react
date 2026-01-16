import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import GetProductQuery from "./queryOptions/useProductsQuery";
import ProductCatalog from "./components/ui/teste";
import { Suspense } from "react";

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ProductCatalog/>
      </Suspense>
    </>
  )
}

export default App
