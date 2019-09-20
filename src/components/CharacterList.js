import React from 'react';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CharacterList({ characterList }) {
  return (
    <Container className='character-list'>
      {characterList.map(character => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </Container>
  );
}
