import React from "react";
import "./App.css";
import { ButtonContainer } from "./Button";
import Box from "./Box";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonContainer>Styled button</ButtonContainer>
        <Box
          color="black"
          bg="blue"
          m={2}
          p={2}
          alignItems="center"
          justifyContent="center"
        >
          Tomato
        </Box>
      </header>
    </div>
  );
};

export default App;
