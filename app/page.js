'use client';

import React from 'react';
import Filtro from './_components/filtro';
import Table from './_components/table';
import Header from './_components/header';

const Home = () => {
  return (
    <main>
      <Header />
      <Filtro />
      <Table />
    </main>
  );
};

export default Home;



