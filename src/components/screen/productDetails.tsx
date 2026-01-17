import React, { useState } from 'react';
import { 
  Search, ShoppingBag, ChevronRight, Heart, Star, StarHalf, 
  Minus, Plus, ShoppingCart, Truck, ShieldCheck, RefreshCw, Lock, Menu 
} from 'lucide-react';
import Navbar from '../ui/navbar';
import Breadcrumbs from '../ui/breadcrumbs';
import GetProductQueryById from '../../queryOptions/useProductQueryById';
import { useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import StarRating from '../ui/starRating';

const mainProduct = {
  id: 1,
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: 109.95,
  originalPrice: 159.00,
  description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday essentials in the main compartment, and small items in the zippered front pocket.",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  rating: { rate: 3.9, count: 120 }
};

const relatedProducts = [
  {
    id: 2,
    title: "Mens Casual Premium Slim Fit T-Shirts ",
    price: 22.3,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1, count: 259 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7, count: 500 }
  },
  {
    id: 4,
    title: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
    rating: { rate: 2.1, count: 430 }
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold",
    price: 695,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
    rating: { rate: 4.6, count: 400 }
  }
];

//

export default function ProductDetailsPage() {

  const { id } = useParams()
  const productId =  Number(id)
  const {data:product}= useSuspenseQuery(GetProductQueryById(productId))

  return (
    <div className="min-h-screen bg-gray-50 text-slate-600 font-sans selection:bg-blue-100 selection:text-blue-900">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    <Navbar/>
      <div className="max-w-[1600px] mx-auto px-4 py-8 lg:px-8">
        <Breadcrumbs  productTitle={product.title}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-20">
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-8 relative flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
              {/* <button className="absolute top-4 right-4 text-slate-300 hover:text-blue-500 hover:bg-blue-50 p-2 rounded-full transition-colors z-10"> */}
              {/*   <Heart className="w-6 h-6" /> */}
              {/* </button> */}
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-full max-h-[500px] object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500" 
              />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="text-3xl lg:text-4xl text-slate-900 font-semibold tracking-tight leading-[1.1] mb-4">
              {product.title}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <StarRating rate={product.rating.rate} count={product.rating.count} />
            </div>
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-4xl text-slate-900 font-medium tracking-tight">${product.price}</span>
            </div>
            <div className="prose prose-sm text-slate-500 leading-relaxed mb-8 max-w-none">
              <p>{product.description}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex items-center border border-slate-200 rounded-lg h-12 w-full sm:w-32">
                <button 
                  onClick={() => setQuantity(q => Math.max(1, q - 1))}
                  className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-l-lg transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="text" 
                  value={product.rating.count} 
                  readOnly
                  className="w-full h-full text-center text-slate-900 font-medium focus:outline-none border-x border-slate-100" 
                />
                <button 
                  onClick={() => setQuantity(q => q + 1)}
                  className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 rounded-r-lg transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-medium h-12 rounded-lg transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Adiconar ao carrinho
              </button>
            </div>

            {/* Trust Signals */}
          </div>
        </div>

        {/* Related Products Section */}
        <div className="pt-12 border-t border-slate-200">
          <h2 className="text-xl text-slate-900 font-medium mb-8">Related Products</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <div key={product.id} className="group bg-white rounded-lg border border-slate-200 hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden">
                <div className="relative p-6 pb-2">
                  <button className="absolute top-3 right-3 text-slate-300 hover:text-blue-500 hover:bg-blue-50 p-1.5 rounded-full transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <img src={product.image} alt={product.title} className="w-full h-48 object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-300" />
                </div>

                <div className="p-4 pt-2 flex flex-col flex-1 border-t border-slate-100">
                  <span className="text-xs text-slate-500 font-medium uppercase mb-1">{product.category}</span>
                  <h2 className="text-slate-800 text-sm font-medium leading-snug mb-1 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {product.title}
                  </h2>
                  
                  <div className="mb-2 mt-1">
                     <StarRating rate={product.rating.rate} count={product.rating.count} size="w-3 h-3" />
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="flex items-baseline gap-2">
                      <div className="text-slate-900 font-light text-xl tracking-tight">${product.price.toFixed(2)}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
