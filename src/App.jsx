import styled from "styled-components";
import { GlobalStyle } from "./resetCss";
import Steps from "./Steps";
import { useState } from "react";
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
  gap: 2rem;

  background-color: var(--White);

  width: 100%;
  height: 100%;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: ${568 + (16 * 2)}px;

    padding: 1rem;
  }
`;

function App() {
  const [step, setStep] = useState(1);

  return (
    <>
      <GlobalStyle />
      <Container>
        <Wrapper>
          <Steps changeStep={setStep}/>
          <Info />
        </Wrapper>
      </Container>
    </>
  );
};

export default App;
