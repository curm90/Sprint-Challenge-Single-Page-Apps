import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import CharacterCard from './CharacterCard';

import data from '../data.json';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterList, setCharacterList] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    function fetchData() {
      return Promise.resolve({
        data: data
      }).then(res => {
        setCharacterList(res.data.results);
      });
    }
    fetchData();
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
  }, []);

  return (
    <Container className='character-list'>
      {characterList.map(character => (
        <CharacterCard character={character} key={character.id} />
      ))}
    </Container>
  );
}
