'use client';

import React, { useState } from 'react';
import Link from "next/link";
import Image from "next/image";
import image7 from '../../public/image7.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-20 flex items-center justify-between px-8 bg-yellow-400">
      <div className="flex items-center">
        <Link href="/">
          <Image src={image7} alt="pretademia" className="w-32" />
        </Link>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-purple-950 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex gap-8 text-purple-950 font-medium">
        <Link href="/about">Sobre nós</Link>
        <Link href="/contact">Contato</Link>
      </div>

      {isOpen && (
        <div className="absolute top-20 right-0 bg-yellow-400 w-full shadow-md md:hidden">
          <div className="flex flex-col items-center gap-4 p-4 text-purple-950 font-medium">
            <Link href="/about" onClick={() => setIsOpen(false)}>Sobre nós</Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>Contato</Link>
          </div>
        </div>
      )}
    </div>
  );
}

