import React from "react";
import { StyledButton } from "./components/Button";
import Box from "./components/Box";
import Header from "./components/Header";
import ButtonStyledSystem from "./components/ButtonStyledSystem";

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
      <ButtonStyledSystem
        variant="primary"
        onClick={() => console.log("button")}
      >
        Primary
      </ButtonStyledSystem>
    </div>
  );
};

export default App;
