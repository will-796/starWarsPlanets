import React from 'react';
import './App.css';
import DataSort from './components/DataSort';
import FiltersRender from './components/FiltersRender';
import InputNameFilter from './components/InputNameFilter';
import NumFilter from './components/NumFilter';
import Table from './components/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <InputNameFilter />
      <NumFilter />
      <FiltersRender />
      <DataSort />
      <Table />
    </Provider>
  );
}

export default App;
