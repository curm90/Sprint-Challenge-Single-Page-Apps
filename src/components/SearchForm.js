import React, { useState } from 'react';
import styled from 'styled-components';

const Input = styled.section`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 1rem 0;

  input {
    width: 30%;
    padding: 0.4rem;
    font-size: 1.2rem;
    outline: none;
  }
`;

export default function SearchForm() {
  return (
    <Input className='search-form'>
      <input type='text' name='search' placeholder='Search' />
    </Input>
  );
}
