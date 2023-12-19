import React from 'react';
import Filtro from '../components/filtro';
import Table from '../components/table';
import Header from '../components/header';

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


