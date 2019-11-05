import React from "react";
import { StyledButton } from "./components/button/Button";
import Box from "./components/box/Box";
import Header from "./components/header/Header";
import ButtonStyledSystem from "./components/button-styled-system/ButtonStyledSystem";

const App: React.FC = () => {
  return (
    <div>
      <Header>In the future component examples will be here!</Header>
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
        width="fit-content"
        borderRadius={4}
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
