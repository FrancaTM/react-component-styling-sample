import React from "react";
import "./App.css";
import styled from "styled-components";

import UserSummary from "./components/UserSummary";

const StyledDiv = styled.div`
  width: 90%;
  max-width: 40rem;
  margin: 2rem auto;
  border: 1px solid #ccc;
  padding: 1rem;
`;

function App() {
  return (
    <StyledDiv>
      <UserSummary />
      <button>Nope</button>
    </StyledDiv>
  );
}

export default App;
