import { useContext } from "react";
import styled from "styled-components";
import { MyContext } from "./App";

const FooterDiv = styled.footer`
  margin-top: auto;
  
  width: 100%;

  display: flex;
  justify-content: space-between;
`

const BackButton = styled.button`
  border: none;
  background-color: transparent;
  color: var(--Cool-gray);
  cursor: pointer;

  &:hover {
    color: var(--Marine-blue);
  }
`;

const NextButton = styled.button`
  background-color: var(--Marine-blue);
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  color: var(--White);
  cursor: pointer;

  &:hover {
    opacity: .9;
  }
`

const Back = ({ onclick }) => {
  return (
    <BackButton onClick={onclick}>
      Go Back
    </BackButton>
  );
};

const Next = ({ onclick }) => {
  return (
    <NextButton onClick={onclick}>
      Next Step
    </NextButton>
  );
};

const Footer = () => {
  const { handleButton, step } = useContext(MyContext);

  function stepBack() {
    if (step > 1) handleButton(step - 1)
  } 

  function stepForward() {
    if (step < 4) handleButton(step + 1)
  }

  return(
    <FooterDiv>
      <Back onclick={ stepBack } />
      <Next onclick={ stepForward } />
    </FooterDiv>
  )
};

export default Footer;