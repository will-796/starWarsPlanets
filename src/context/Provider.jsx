import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Context from './context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  useEffect(() => {
    const fetchApi = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const responseData = await response.json();
      setData(responseData.results);
    };
    fetchApi();
  }, []);
  const contextValue = {
    data,
    filters: {
      nameFilter,
      filterByNumericValues,
    },
    setNameFilter,
    setFilterByNumericValues,
  };
  return (
    <Context.Provider value={ contextValue }>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
