import React, { useContext } from 'react';
import context from '../context/context';

const InputNameFilter = () => {
  const { filters: { nameFilter }, setNameFilter } = useContext(context);

  return (
    <label htmlFor="nameFilter">
      <input
        type="text"
        id="nameFilter"
        data-testid="name-filter"
        value={ nameFilter }
        onChange={ (e) => setNameFilter(e.target.value) }
      />
    </label>
  );
};

export default InputNameFilter;
