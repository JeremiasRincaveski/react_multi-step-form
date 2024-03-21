import React, { useState } from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: url('/svg/bg-sidebar-mobile.svg');
  background-repeat: no-repeat;
  background-size: cover;

  width: 100%;
  height: 10rem;

  display: flex;
  justify-content: center;
  padding-top: 2rem;

  ol {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }

  li {
    display: flex;
    gap: 1.3rem;
  }

  @media (min-width: 900px) {
    background: url('/svg/bg-sidebar-desktop.svg');
    background-repeat: no-repeat;

    justify-content: flex-start;

    padding: 2rem 1.5rem;

    height: 568px;
    width: 400px;

    ol {
      flex-direction: column;
      justify-content: flex-start;
    }
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

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: .2rem;
  display: none;

  span {
    text-transform: uppercase;
    color: var(--Cool-gray);
    font-weight: var(--Font-weight-regular);
  }

  p {
    text-transform: uppercase;
    font-weight: var(--Font-weight-bold);
    color: var(--Light-blue);
  }

  @media (min-width: 900px) {
   display: flex;
  }
`

function Steps({ changeStep }) {
  const [botoes, setBotoes] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const handleButton = (e) => {
    const id = e.target.textContent;
    changeStep(id);
    
    setBotoes({
      1: false,
      2: false,
      3: false,
      4: false,
      [id]: true
    })
  }

  return (
    <NavBar>
      <ol>
        <li>
          <Button isativo={`${botoes[1]}`} onClick={handleButton}>1</Button>
          
          <Info>
            <span>step 1</span>
            <p>your info</p>
          </Info>
        </li>
        
        <li>
          <Button isativo={`${botoes[2]}`} onClick={handleButton}>2</Button>
          
          <Info>
            <span>step 2</span>
            <p>select plan</p>
          </Info>
        </li>
        <li>
          <Button isativo={`${botoes[3]}`} onClick={handleButton}>3</Button>

          <Info>
            <span>step 3</span>
            <p>add-ons</p>
          </Info>
        </li>
        <li>
          <Button isativo={`${botoes[4]}`} onClick={handleButton}>4</Button>
        
          <Info>
            <span>step 4</span>
            <p>summary</p>
          </Info>
        </li>
      </ol>
    </NavBar>
  );
}

export default Steps;
