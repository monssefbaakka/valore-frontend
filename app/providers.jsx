'use client';

import { SessionProvider } from 'next-auth/react';
import { ProductProvider } from '@/context/ProductContext';

export function Providers({ children }) {
  return (
    <SessionProvider>
      <ProductProvider>
        {children}
      </ProductProvider>
    </SessionProvider>
  );
}
