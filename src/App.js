import React from 'react';
import './App.css';
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
      <Table />
    </Provider>
  );
}

export default App;
