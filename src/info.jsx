import styled from "styled-components";
import { Title } from "./style";

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  justify-content: flex-start;

  width: 100%;
  height: 100%;
`;

const DivInput = styled.div`

`;

function Input({ label, eg }) {
  return (
    <DivInput>
      <label htmlFor={label}>{label}</label>
      <input type="text" placeholder={eg}/>
    </DivInput>
    )
}

function Info() {
  return (
    <PersonalInfo>
      <Title>
        <h1>Personal info</h1>
        <p>Please provide your name, email address, and phone number.</p>
      </Title>


    </PersonalInfo>
  )
};

export default Info;