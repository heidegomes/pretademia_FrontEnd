'use client';

import React from 'react';
import PretademiaProvider from '../context/pretademiaProvider';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./output.css" rel="stylesheet" />
        <title>Pretademia</title>
      </head>
      <body className="bg-black text-yellow-400">
        <PretademiaProvider>
          {children}
        </PretademiaProvider>
      </body>
    </html>
  );
}

