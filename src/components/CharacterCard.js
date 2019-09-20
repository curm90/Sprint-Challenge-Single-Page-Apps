import React from 'react';

export default function CharacterCard({ character }) {
  return (
    <div>
      <div key={character.id}>
        <img src={character.image} alt={character.name} />
        <div>
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
    </div>
  );
}
