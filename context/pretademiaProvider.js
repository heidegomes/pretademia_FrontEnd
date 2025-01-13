
import React, { useState, useMemo } from 'react';
import PretademiaContext from './pretademiaContext';
// import PropTypes from 'prop-types';

const PretademiaProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);

  const value = useMemo(() => ({
    filteredData,
    setFilteredData
  }), [
    filteredData,
    setFilteredData
  ]);

  return (
    <PretademiaContext.Provider value={value}>
      {children}
    </PretademiaContext.Provider>
  );
};

// PretademiaProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

export default PretademiaProvider;
