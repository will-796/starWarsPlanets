import React, { useContext } from 'react';
import context from '../context/context';

const FiltersRender = () => {
  const {
    filters: { filterByNumericValues },
    setFilterByNumericValues,
  } = useContext(context);
  return (
    <div>
      {filterByNumericValues.map((filter) => (
        <div key={ filter.column } data-testid="filter">
          <span>{filter.column}</span>
          <button
            type="button"
            onClick={ () => setFilterByNumericValues(
              filterByNumericValues.filter(
                (filterNum) => filterNum.column !== filter.column,
              ),
            ) }
          >
            x
          </button>
        </div>
      ))}
      <button
        type="button"
        data-testid="button-remove-filters"
        onClick={ () => setFilterByNumericValues([]) }
      >
        {' '}
        remove all

      </button>
    </div>
  );
};

export default FiltersRender;
