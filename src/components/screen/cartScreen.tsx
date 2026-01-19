import Navbar from '../ui/navbar';
import { Link } from 'react-router-dom';
import EmptyCart from '../ui/emptyCart';
import CartCard from '../ui/cartCard';
import { useCart } from '../../context/Cartcontext';

export default function CartScreen() {
    const { 
        cartItems, 
        cartTotal, 
        clearCart 
    } = useCart();

    if (cartItems.length === 0) {
        return <EmptyCart/>;
    }

    return (
        <div className="bg-gray-50 text-slate-600 antialiased min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900">
            <Navbar/>
            <div className="max-w-[1200px] mx-auto px-4 py-12 lg:px-8">
                <h1 className="text-2xl lg:text-3xl text-slate-900 font-semibold tracking-tight mb-8">Meu Carrinho</h1>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-8 space-y-6">
                        <div className="hidden sm:grid grid-cols-12 text-sm font-medium text-slate-400 uppercase tracking-wide border-b border-slate-200 pb-4">
                            <div className="col-span-6">PRODUTO</div>
                            <div className="col-span-3 text-center">QUANTIDADE</div>
                            <div className="col-span-3 text-right">TOTAL</div>
                        </div>

                        {/* PEGUEI ESSA SCROLLBAR DE UM SITE : https://preline.co/docs/custom-scrollbar.html POR DEPENDER DE WEBKIT A DEPENDER DO */}
                        {/* NAVEGADOR PODE FICAR "BUGADO" , NO MEU CASO O NO BRAVE FOCU BOM POREM NO FIREFOX FICOU DIFERENTE*/}

                        <div className="
                            max-h-[720px] overflow-y-auto pr-2 flex flex-col gap-2
                            [&::-webkit-scrollbar]:w-2
                            [&::-webkit-scrollbar-track]:rounded-full
                            [&::-webkit-scrollbar-track]:bg-slate-50
                            [&::-webkit-scrollbar-thumb]:rounded-full
                            [&::-webkit-scrollbar-thumb]:bg-slate-300
                            ">
                            {cartItems.map((item) => (
                                <CartCard key={item.id} item={item}/>
                            ))}
                        </div>

                    </div>
                    <div className="lg:col-span-4">
                        <div className="bg-white border border-slate-200 rounded-xl p-6 lg:sticky lg:top-24 shadow-sm">
                            <div className="space-y-4 text-sm">
                                <div className="flex justify-between items-baseline mb-6">
                                    <span className="text-base font-semibold text-slate-900">Total da Compra:</span>
                                    <span className="text-xl font-semibold text-slate-900 tracking-tight">
                                        ${cartTotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <button 
                                onClick={clearCart}  
                                className="w-full bg-red-500 hover:bg-red-400 cursor-pointer text-white font-medium h-12 rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200"
                            >
                                Limpar Carrinho 
                            </button>

                            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                                <Link to={'/'} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1">
                                    <span aria-hidden="true">←</span> Continuar Comprando
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
