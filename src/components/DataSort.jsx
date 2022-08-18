import React, { useContext } from 'react';
import context from '../context/context';

const DataSort = () => {
  const { order, setOrder } = useContext(context);
  const columnFilter = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ];
  const { column } = order;
  return (
    <div>
      <label htmlFor="column">
        <select
          name="column"
          id="column"
          value={ column }
          onChange={ (e) => setOrder({ ...order, column: e.target.value }) }
          data-testid="column-sort"
        >
          {columnFilter.map((columnOption) => (
            <option key={ columnOption } value={ columnOption }>
              {columnOption}
            </option>
          ))}
        </select>
      </label>
      <label htmlFor="ASC">
        ASC
        <input
          data-testid="column-sort-input-asc"
          type="radio"
          name="sort"
          id="ASC"
          value="ASC"
          onChange={ (e) => setOrder({ ...order, sort: e.target.value }) }
        />
      </label>
      <label htmlFor="DESC">
        DESC
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          id="DESC"
          value="DESC"
          onChange={ (e) => setOrder({ ...order, sort: e.target.value }) }
        />
      </label>
      <button
        type="button"
        data-testid="column-sort-button"
        onClick={ () => setOrder({ ...order, sorted: !order.sorted }) }
      >
        ordenar
      </button>
    </div>
  );
};

export default DataSort;
