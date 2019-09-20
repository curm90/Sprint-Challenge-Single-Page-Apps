import React from 'react';
import styled from 'styled-components';

import rick from '../images/rick-morty.jpeg';

const Section = styled.section`
  img {
    width: 100%;
    box-shadow: 2px 2px 4px black;
  }
`;

export default function WelcomePage() {
  return (
    <Section className='welcome-page'>
      <header>
        <h1>Welcome to the ultimate fan site!</h1>
        <img className='main-img' src={rick} alt='rick' />
      </header>
    </Section>
  );
}
