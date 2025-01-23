'use client';

import React from 'react';
import Link from "next/link";
import image7 from '../../public/image7.png';
import Image from "next/image";

export default function Header() {
  return (
    <div className="h-20 flex items-center justify-between px-8 bg-yellow-400">
      <div className="flex items-center">
        <Link href="/">
          <Image src={image7} alt="pretademia" className="w-32" />
        </Link>
      </div>

      <div className="flex gap-8 text-purple-950 font-medium">
        <Link href="/about">Sobre nós</Link>
        <Link href="/contact">Contato</Link>
      </div>
    </div>
  );
}
