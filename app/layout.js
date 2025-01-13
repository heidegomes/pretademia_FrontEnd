// /app/layout.js
'use client';

import React from 'react';
import PretademiaProvider from '../context/pretademiaProvider';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <PretademiaProvider>
          {children}
        </PretademiaProvider>
      </body>
    </html>
  );
}
