//Compoente gerado por ia, ele e apenas uma pagina 404 personalizada
import { AlertCircle, ArrowLeft } from "lucide-react";
import Navbar from "../ui/navbar";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="bg-gray-50 text-slate-600 antialiased selection:bg-blue-100 selection:text-blue-900 min-h-screen flex flex-col font-sans">
    <Navbar/>
      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="max-w-xl mx-auto text-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-100 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>
            <div className="inline-flex items-center justify-center w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-200 mb-8">
                <AlertCircle className="w-6 h-6 text-orange-500" />
            </div>
            <p className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-3">404 Error</p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-4">Página não encontrada</h1>
            <p className="text-slate-500 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
                Desculpe, não foi possível encontrar a página que você está procurando. Ela pode ter sido removida ou o link está quebrado.            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                  to="/" 
                  className="w-full sm:w-auto px-6 h-12 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-slate-200"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Voltar para a página inicial
                </Link>
            </div>
        </div>
      </main>
    </div>
  );
}
