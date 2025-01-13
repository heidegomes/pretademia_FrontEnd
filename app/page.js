'use client';

import React from 'react';
import Filtro from './_components/filtro';
import Table from './_components/table';
import Header from './_components/header';

// import PretademiaProvider from '../context/pretademiaProvider';

const Home = () => {
  return (
    <>
      <Header />
      <Filtro />
      <Table /> 
    </>
  );
};

export default Home;


