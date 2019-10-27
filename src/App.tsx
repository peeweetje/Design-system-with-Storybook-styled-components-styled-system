import React from "react";
import { StyledButton } from "./components/Button";
import Box from "./components/Box";
import Header from "./components/header";
import ButtonSS from "./components/ButtonSS";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <StyledButton onClick={() => console.log("clicked")}>
        Styled button
      </StyledButton>
      <Box
        color="white"
        bg="blue"
        m={2}
        p={2}
        alignItems="center"
        justifyContent="center"
      >
        hello
      </Box>
      <ButtonSS variant="primary" onClick={() => console.log("button")}>
        Primary
      </ButtonSS>
    </div>
  );
};

export default App;
