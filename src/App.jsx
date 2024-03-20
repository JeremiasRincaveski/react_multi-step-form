import styled from "styled-components";
import { GlobalStyle } from "./styles";
import Steps from "./Steps";

const Container = styled.div`
  width: 100%;
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Steps />
      </Container>
    </>
  );
}

export default App;
