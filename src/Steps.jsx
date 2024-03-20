import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: url('/svg/bg-sidebar-mobile.svg') no-repeat;
  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  align-items: center;

  ol {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const Button = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: 1px solid var(--Light-blue);
  background-color: ${props => props.isativo === 'true' ? 'var(--Light-blue)' : 'transparent'};
  color: ${props => props.isativo === 'true' ? 'var(--Marine-blue)' : 'var(--Light-blue)'};
  font-size: 1rem;
  font-weight: var(--Font-weight-bold);
  cursor: pointer;
`

function Steps() {
  const [botoes, setBotoes] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const handleButton = (e) => {
    const id = e.target.textContent;
    
    console.log(botoes);
    for (const key in setBotoes) {
      if (id === key) {
        setBotoes[key] = true;
      } else {
        setBotoes[key] = false;
      }
    }
  }

  return (
    <NavBar>
      <ol>
        <li>
          <Button isativo={`${botoes[1]}`} onClick={handleButton}>1</Button>
        </li>
        <li>
          <Button isativo={`${botoes[2]}`} onClick={handleButton}>2</Button>
        </li>
        <li>
          <Button isativo={`${botoes[3]}`} onClick={handleButton}>3</Button>
        </li>
        <li>
          <Button isativo={`${botoes[4]}`} onClick={handleButton}>4</Button>
        </li>
      </ol>
    </NavBar>
  );
}

export default Steps;
