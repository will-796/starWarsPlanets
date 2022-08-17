import React, { useContext } from 'react';
import context from '../context/context';

const TableBody = () => {
  const { data } = useContext(context);
  const keys = Object.keys(data[0] || {}).filter((key) => key !== 'residents');
  return (
    <tbody>
      {data.map((planet) => (
        <tr key={ planet.name }>
          {keys.map((key) => (
            <td key={ key }>{planet[key]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
