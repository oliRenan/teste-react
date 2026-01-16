import React, { useState } from 'react';
import { Heart, BadgeCheck, Star, Ticket } from 'lucide-react';
import ProductCard from './productCard';
import { useSuspenseQuery } from '@tanstack/react-query';
import GetProductQuery from '../../queryOptions/useProductsQuery';
import Sidebar from './sidebar';

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
