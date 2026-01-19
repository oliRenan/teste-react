import { useState } from 'react'; 
import Navbar from '../ui/navbar';
import { Link } from 'react-router-dom';
import EmptyCart from '../ui/emptyCart';
import CartCard from '../ui/cartCard';
import { useCart } from '../../context/Cartcontext';
import { AlertCircle} from 'lucide-react'; 

export default function CartScreen() {
    const { 
        cartItems, 
        cartTotal, 
        clearCart 
    } = useCart();

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    if (cartItems.length === 0) {
        return <EmptyCart/>;
    }

    const handleConfirmClear = () => {
        clearCart();
        setIsDialogOpen(false);
    };

    return (
        <div className="bg-gray-50 text-slate-600 antialiased min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 relative">
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

                        <div className="max-h-[720px] overflow-y-auto pr-2 flex flex-col gap-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-50 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-slate-300">
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

                            <div className="mt-4 pt-4 border-t border-slate-100 text-center">
                                <Link to={'/'} className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors inline-flex items-center gap-1">
                                    <span aria-hidden="true">←</span> Continuar Comprando
                                </Link>
                            </div>
                        </div>

                        <button 
                            onClick={() => setIsDialogOpen(true)} 
                            className="w-full mt-6 bg-red-500 hover:bg-red-600 cursor-pointer text-white border border-red-200 font-medium h-12 rounded-lg transition-all flex items-center justify-center gap-2 shadow-sm hover:shadow"
                        >
                            Limpar Carrinho 
                        </button>
                    </div>
                </div>
            </div>
            {/* pedi pra ia gerar essa modal */}
            {isDialogOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden animate-in zoom-in-95 duration-200">
                        <div className="p-6">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                                    <AlertCircle className="w-6 h-6 text-red-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900">Limpar o carrinho?</h3>
                                    <p className="text-sm text-slate-500 mt-1">
                                        Tem certeza que deseja remover todos os itens? Essa ação não pode ser desfeita.
                                    </p>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3 mt-6 justify-end">
                                <button 
                                    onClick={() => setIsDialogOpen(false)}
                                    className="px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    onClick={handleConfirmClear}
                                    className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg shadow-sm transition-colors"
                                >
                                    Sim, limpar tudo
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
