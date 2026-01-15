import React, { useState } from 'react';
import { Heart, BadgeCheck, Star, Ticket } from 'lucide-react';
import ProductCard from './productCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import GetProductQuery from '../../queryOptions/useProductsQuery';


export default function ProductCatalog() {
  const {data:products}= useSuspenseQuery(GetProductQuery())
  return (
    <div className="bg-gray-50 text-slate-600 antialiased selection:bg-blue-100 selection:text-blue-900 min-h-screen font-sans">
      <div className="max-w-[1600px] mx-auto px-4 py-8 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">
          <Sidebar />
          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
const Sidebar = () => (
  <aside className="hidden lg:block space-y-10 pr-4">
    <div>
      <h3 className="text-slate-900 font-medium text-lg mb-4">Categoria</h3>
      <ul className="space-y-3 text-base">
        {[
          { label: "Masculino", count: "207.251" },
          { label: "Feminino", count: "165.800" },
          { label: "Meninos", count: "357" },
          { label: "Meninas", count: "357" },
        ].map((item) => (
          <li key={item.label} className="group cursor-pointer">
            <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{item.label}</span>
            <span className="text-slate-400 text-sm ml-1">({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3 className="text-slate-900 font-medium text-lg mb-4">Marca</h3>
      <ul className="space-y-3 text-base">
        {[
          { label: "Olympikus", count: "28.229" },
          { label: "Fila", count: "11.791" },
          { label: "adidas", count: "9.290" },
          { label: "Via Marte", count: "9.290" },
          { label: "Moleca", count: "7.861" },
          { label: "Puma", count: "6.789" },
          { label: "Asics", count: "6.431" },
        ].map((item) => (
          <li key={item.label} className="group cursor-pointer">
            <span className="text-slate-700 group-hover:text-blue-600 transition-colors">{item.label}</span>
            <span className="text-slate-400 text-sm ml-1">({item.count})</span>
          </li>
        ))}
      </ul>
    </div>
  </aside>
);
