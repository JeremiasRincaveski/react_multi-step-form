import styled from "styled-components";
import { useState } from "react";
import Footer from "./footer";
import Title from "./title";

const PersonalInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: first baseline;
  justify-content: flex-start;
  gap: 1rem;

  margin-top: -5.5rem;
  width: 90vw;
  padding: 2rem;
  background-color: var(--White);
  border-radius: 1rem;

  @media (min-width: 900px) {
    width: 443px;
    height: 100%;
    padding-top: 1rem;
    margin: 0;
  }
`;

const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
  
  width: 100%;

  input {
    width: 100%;
    padding: .7rem;
    font-weight: var(--Font-weight-medium);
    outline: none;
    border: 1px solid ${props => props.$erro ? "var(--Strawberry-red)" : "var(--Light-gray)"};
    border-radius: 5px;
    cursor: pointer;
  }

  input:hover {
    border-color: var(--Purplish-blue);
  }
`;

function Input({ label, eg, value, onchange }) {
  const [erro, seterro] = useState(false)
  const id = label.toLowerCase().split(' ').join('_');

  return (
    <DivInput $erro={erro}>
      <label 
        htmlFor={label}
      >
        {label}
      </label>
      <input 
        type="text" 
        placeholder={eg} 
        id={id} 
        value={value}
        onChange={(e) => onchange(e.target.value)}
      />
      <span>This field is required</span>
    </DivInput>
  )
}

function Info({ setStep, step }) {
  const [name, setName] =  useState('Vanessa Mint')
  const [email, setEmail] =  useState('vanessamint@')
  const [phone, setPhone] =  useState('')

  return (
    <PersonalInfo>
      <Title 
        title={'Personal info'}
        description={'Please provide your name, email address, and phone number.'}
      />

      <Input 
        label='Name' 
        eg="e.g. Stephen King" 
        value={name}
        onchange={setName}
      />
      <Input 
        label='Email Address' 
        eg="e.g. stephenking@lorem.com" 
        value={email}
        onchange={setEmail}
      />
      <Input 
        label='Phone Number' 
        eg="e.g +1 234 567 890"
        value={phone}
        onchange={setPhone}
      />

      <Footer/>
    </PersonalInfo>
  )
};

export default Info;