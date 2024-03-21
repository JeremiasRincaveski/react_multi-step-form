import styled from "styled-components";
import { GlobalStyle } from "./resetCss";
import Steps from "./Steps";
import { useState, createContext } from "react";
import Info from "./info";

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--Light-blue);
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 2rem;

  
  width: 100vw;
  height: 100%;
  
  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 3rem;
    
    height: ${568 + (16 * 2)}px;
    width: ${274 + 443 + 150}px;
    max-width: 95vw;
    
    background-color: var(--White);
    padding: 1rem;
    border-radius: 1rem;
  }
`;

export const MyContext = createContext()

function App() {
  const [step, setStep] = useState(1);
  const [botoes, setBotoes] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  const paginas = {
    1: <Info setStep={ setStep } step={ step } />,
    2: <div>olá</div>
  }

  const handleButton = (step) => {
    setBotoes({
      1: false,
      2: false,
      3: false,
      4: false,
      [step]: true
    })

    setStep(step)
  }

  return (
    <MyContext.Provider value={{ step, setStep, botoes, handleButton }}>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Steps />
          {/* <Info setStep={ setStep } step={ step } /> */}
          {paginas[step]}
        </Wrapper>
      </Container>
    </MyContext.Provider>
  );
};

export default App;
