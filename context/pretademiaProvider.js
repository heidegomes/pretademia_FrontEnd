'use client';

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PretademiaContext from './pretademiaContext';  // Importa o contexto

export const PretademiaProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);

  const fetchData = async ({ page, pageSize }) => {
    const response = await fetch(
      `http://localhost:3001/projects?page=${page}&pageSize=${pageSize}`
    );
    const data = await response.json();
    setFilteredData(data);  // Atualiza o estado com os dados retornados
  };

  return (
    <PretademiaContext.Provider value={{ fetchData, setFilteredData, filteredData }}>
      {children} 
    </PretademiaContext.Provider>
  );
};

PretademiaProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Garantindo que 'children' será passado
};