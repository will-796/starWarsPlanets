import React, { useContext } from 'react';
import context from '../context/context';

const TableBody = () => {
  const {
    filters: { nameFilter, filterByNumericValues },
    order,
    data,
  } = useContext(context);

  const keys = Object.keys(data[0] || {}).filter((key) => key !== 'residents');
  const filteredData = data
    .filter((planet) => planet.name.toLowerCase().includes(nameFilter.toLowerCase()))
    .filter((planet) => filterByNumericValues.every(({ column, comparison, value }) => {
      if (comparison === 'maior que') {
        return +planet[column] > +value;
      }
      if (comparison === 'menor que') {
        return +planet[column] < +value;
      }
      return +planet[column] === +value;
    }))
    .sort((a) => {
      const { column, sorted } = order;
      if (sorted) return Number.isNaN(+a[column]) ? 1 : false - true;
      return 0;
    })
    .sort((a, b) => {
      const { column, sort, sorted } = order;

      if (sorted) {
        if (sort === 'DESC') return b[column] - a[column];
        if (sort === 'ASC') return a[column] - b[column];
      }
      return 0;
    });
  return (
    <tbody>
      {filteredData.map((planet) => (
        <tr key={ planet.name }>
          {keys.map((key) => (key === 'name' ? (
            <td data-testid="planet-name" key={ key }>
              {planet[key]}
            </td>
          ) : (
            <td key={ key }>{planet[key]}</td>
          )))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
