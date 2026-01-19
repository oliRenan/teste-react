import {Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './routes/route.tsx'
import { CartProvider } from './context/Cartcontext.tsx'
import PacmanLoader from './components/ui/pacmanLoader.tsx'

const querryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <QueryClientProvider client={querryClient}>
      <Suspense fallback={<PacmanLoader/>}>
        <CartProvider>
        <AppRoutes/>
        </CartProvider>
      </Suspense>
    </QueryClientProvider>
  // </StrictMode>,
)
