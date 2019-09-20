import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';

import Header from './components/Header';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

import data from '../src/data.json';

const style = {
  textDecoration: 'none',
  color: 'black',
  padding: '0 1rem'
};

export default function App() {
  const [characterList, setCharacterList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const onSearch = e => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    function fetchData() {
      return Promise.resolve({
        data: data
      }).then(res => {
        setCharacterList(res.data.results);
      });
    }
    fetchData();
  }, []);

  return (
    <main>
      <Link to='/' style={style}>
        Home
      </Link>
      <Link to='/characters' style={style}>
        Characters
      </Link>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route
        path='/characters'
        render={() => (
          <SearchForm onSearch={onSearch} searchTerm={searchTerm} />
        )}
      />
      <Route
        path='/characters'
        render={() => (
          <CharacterList
            characterList={characterList.filter(char => {
              return char.name.toLowerCase().includes(searchTerm.toLowerCase());
            })}
          />
        )}
      />
    </main>
  );
}
