import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AppRoutes from './routes/route.tsx'

const querryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={querryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRoutes/>
      </Suspense>
    </QueryClientProvider>
  </StrictMode>,
)
