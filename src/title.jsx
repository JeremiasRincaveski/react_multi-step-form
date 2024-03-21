import styled from "styled-components";

export const TitleDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: .7rem;
  padding-bottom: 1rem;

  h1 {
    font-weight: var(--Font-weight-bold);
    font-size: 2rem;
  }

  p {
    color: var(--Cool-gray);
  }
`

const Title = ({ title, description }) => {
  return(
    <TitleDiv>
      <h1>{title}</h1>
      <p>{description}</p>
    </TitleDiv>
  )
}

export default Title