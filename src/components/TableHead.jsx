import React from 'react';

const TableHead = () => {
  const keys = [
    'name',
    'Rotation period',
    'Orbital period',
    'Diameter',
    'Climate',
    'Gravity',
    'Terrain',
    'Surface water',
    'Population',
    'Films',
    'Created',
    'Edited',
    'Erl',
  ];
  return (
    <thead>
      <tr>
        {keys.map((key) => (
          <th key={ key }>{key}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHead;
