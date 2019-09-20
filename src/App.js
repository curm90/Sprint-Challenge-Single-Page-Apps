import React from 'react';
import { Route, Link } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';
import WelcomePage from './components/WelcomePage';

const style = {
  textDecoration: 'none',
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
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
    </main>
  );
}
