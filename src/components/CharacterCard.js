import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  border: 1px solid #e2e2e2;
  box-shadow: 1px 1px 4px #e2e2e2;
  border-radius: 3px;
  width: 30%;
  margin: 1rem 0;

  img {
    width: 100%;
    box-shadow: 0px 6px 4px #e2e2e2;
  }

  .info {
    padding: 0.6rem;

    ul {
      padding: 0;
      li {
        list-style: none;
        line-height: 1.5;

        :nth-child(1) {
          color: #bcbcbc;
        }
      }
    }
  }
`;

export default function CharacterCard({ character }) {
  return (
    <Div>
      <div key={character.id}>
        <img src={character.image} alt={character.name} />
        <div className='info'>
          <h2>{character.name}</h2>
          <ul>
            <li>
              {character.species} - {character.status}
            </li>
            <li>Location: {character.location.name}</li>
            <li>Origin: {character.origin.name}</li>
          </ul>
        </div>
      </div>
    </Div>
  );
}
