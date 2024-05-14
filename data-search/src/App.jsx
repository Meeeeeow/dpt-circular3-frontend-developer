import { useState } from 'react';
import './App.css'
import Nav from './components/Nav'
import Buttons from './components/Buttons';
import SearchForm from './components/SearchForm';

function App() {
  const [selected, setSelected] = useState('roundTrip');

  const handleSelect = (type) => {
    setSelected(type);
  };
  return (
    <main>
      <Nav/>
      <Buttons selected={selected} setSelected={setSelected} handleSelect={handleSelect}/>
      <SearchForm flightType={selected} /> 
    </main>
  )
}

export default App

