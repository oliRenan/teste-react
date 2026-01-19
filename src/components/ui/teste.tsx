import React from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from './productCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import GetProductQuery from '../../queryOptions/useProductsQuery';
import Sidebar from './sidebar';
import Navbar from './navbar';

export default function ProductCatalog() {
  const { data: products } = useSuspenseQuery(GetProductQuery());
  
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('q');       
  const categoryFilter = searchParams.get('category'); 

  const filteredProducts = products.filter((product) => {
    const matchesSearch = searchQuery 
      ? product.title.toLowerCase().includes(searchQuery.toLowerCase()) 
      : true;
    const matchesCategory = categoryFilter 
      ? product.category === categoryFilter 
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="bg-gray-50 text-slate-600 min-h-screen font-sans">
      <Navbar />
      <div className="max-w-[1600px] mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <Sidebar /> 
          <main>
            <div className="mb-6 flex items-center gap-2 text-sm text-slate-500">
              {(searchQuery || categoryFilter) && (
                <>
                  <span>Resultados: </span>
                  <span className="font-semibold text-slate-900">{filteredProducts.length} itens</span>
                  {categoryFilter && (
                    <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                      Categoria: {categoryFilter}
                    </span>
                  )}
                  {searchQuery && (
                    <span className="bg-slate-200 text-slate-800 px-2 py-0.5 rounded-full text-xs">
                      Busca: "{searchQuery}"
                    </span>
                  )}
                </>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="text-xl text-slate-400">Nenhum produto encontrado com esses filtros.</p>
                <button 
                    onClick={() => window.location.href = '/'} 
                    className="mt-4 text-blue-600 font-medium hover:underline"
                >
                    Limpar todos os filtros
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
