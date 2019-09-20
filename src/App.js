import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';
import SearchForm from './components/SearchForm';

const style = {
  textDecoration: 'none',
  color: 'black',
  padding: '0 1rem'
};

export default function App() {
  return (
    <main>
      <Link exact to='/' style={style}>
        Home
      </Link>
      <Link to='/characters' style={style}>
        Characters
      </Link>
      <Header />
      <SearchForm />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
