//pedi pra ia gerar esse botao com essa animacao, ate tentei usar essa lib: https://arifszn.github.io/reactive-button/docs/usage#size
//mas pra estilizar fica muito limitado
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Check, Loader2, ShoppingCart, ShieldCheck } from 'lucide-react';
import { useCart } from '../../context/Cartcontext';

export default function CheckoutButton() {
  const [status, setStatus] = useState('idle');
  const navigate = useNavigate();
  const {clearCart}= useCart()

  const handleCheckout = () => {
    if (status !== 'idle') return; 

    setStatus('processing');

    setTimeout(() => {
      setStatus('validating');

      setTimeout(() => {
        setStatus('success');
        setTimeout(() => {
          clearCart();
          navigate('/'); 
        }, 1500);

      }, 1500); 
    }, 2000); 
  };

  const renderContent = () => {
    switch (status) {
      case 'processing':
        return (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Processando...</span>
          </>
        );
      case 'validating':
        return (
          <>
            <ShieldCheck className="w-5 h-5 animate-pulse" />
            <span>Validando...</span>
          </>
        );
      case 'success':
        return (
          <>
            <Check className="w-5 h-5" />
            <span>Compra realizada com Sucesso!</span>
          </>
        );
      default: 
        return (
          <>
            <ShoppingCart className="w-5 h-5" />
            <span>Finalizar Compra</span>
          </>
        );
    }
  };

  const getButtonColor = () => {
    if (status === 'success') return 'bg-emerald-500 hover:bg-emerald-600 border-emerald-500';
    if (status === 'idle') return 'bg-green-600 hover:bg-green-700 border-green-600';
    return 'bg-green-600 opacity-90 cursor-not-allowed border-green-600';
  };

  return (
    <button
      onClick={handleCheckout}
      disabled={status !== 'idle'}
      className={`
        w-full mt-6 h-12 rounded-lg font-medium text-white shadow-sm
        flex items-center justify-center gap-2 transition-all duration-300
        border border-transparent
        ${getButtonColor()}
      `}
    >
      {renderContent()}
    </button>
  );
}
