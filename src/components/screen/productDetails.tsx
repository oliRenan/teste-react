import React, { useState } from 'react';
import { 
  Search, ShoppingBag, ChevronRight, Heart, Star, StarHalf, 
  Minus, Plus, ShoppingCart, Truck, ShieldCheck, RefreshCw, Lock, Menu 
} from 'lucide-react';
import Navbar from '../ui/navbar';
import Breadcrumbs from '../ui/breadcrumbs';
import GetProductQueryById from '../../queryOptions/useProductQueryById';
import { Link, useParams } from 'react-router-dom';
import { useSuspenseQuery } from '@tanstack/react-query';
import StarRating from '../ui/starRating';
import { useForm } from 'react-hook-form';
import GetProductQuery from '../../queryOptions/useProductsQuery';
import RelatedProducts from '../ui/relatedProducts';
import { useCart } from '../../context/Cartcontext';

interface ProductQuantityInput {
  quantity: number;
}

export default function ProductDetailsPage() {

  const { id } = useParams()
  const productId =  Number(id)

  const {data:product}= useSuspenseQuery(GetProductQueryById(productId))
  const {data: products}= useSuspenseQuery(GetProductQuery())

  const relatedProducts = products
  .filter((item) => item.category === product.category && item.id !== product.id)
  .slice(0,4)

  const { addToCart }= useCart()

  const { register, setValue, watch}= useForm<ProductQuantityInput>({
    defaultValues: {
      quantity: 1
    }
  })

  const currentQuantity = watch('quantity')

  const handleIncrement = () => {
    if (currentQuantity < product.rating.count) {
      setValue('quantity', currentQuantity + 1);
    }
  };

  const handleDecrement = () => {
    if (currentQuantity > 1) {
      setValue('quantity', currentQuantity - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-slate-600 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar/>
      <div className="max-w-[1600px] mx-auto px-4 py-8 lg:px-8">
        <Breadcrumbs  productTitle={product.title} category={product.category}/>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 mb-20">
          <div className="flex flex-col-reverse lg:flex-row gap-4">
            <div className="flex-1 bg-white rounded-2xl border border-slate-100 p-8 relative flex items-center justify-center min-h-[400px] lg:min-h-[600px]">
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
                  onClick={handleDecrement}
                  className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent rounded-l-lg transition-colors hover:cursor-pointer"
                  disabled={currentQuantity <= 1} 
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input 
                  type="number" 
                  className="w-full h-full text-center text-slate-900 font-medium focus:outline-none border-x border-slate-100 no-scrollbar [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
                  {...register('quantity',{
                    valueAsNumber: true,
                    min: 1,
                    max: product.rating.count,
                    onBlur: (e) => {
                      const val = Number(e.target.value);
                      if (val < 1 || isNaN(val)) {
                        setValue('quantity', 1);
                      }
                      if (val > product.rating.count) {
                        setValue('quantity', product.rating.count);
                      }
                    }
                  })}
                />
                <button 
                  onClick={handleIncrement}
                  className="w-10 h-full flex items-center justify-center text-slate-500 hover:bg-slate-50 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent rounded-r-lg transition-colors"
                  disabled={currentQuantity >= product.rating.count}
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <button onClick={()=>addToCart(product,currentQuantity)}  className="flex-1 bg-slate-900 hover:bg-slate-800 cursor-pointer text-white font-medium h-12 rounded-lg transition-colors flex items-center justify-center gap-2">
                <ShoppingCart className="w-4 h-4" />
                Adiconar ao carrinho
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="pt-12 border-t border-slate-200">
            <h2 className="text-xl text-slate-900 font-medium mb-8">Produtos Relacionados</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {relatedProducts.map((relProduct) => (
                <RelatedProducts key={relProduct.id} relProduct={relProduct}/>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
