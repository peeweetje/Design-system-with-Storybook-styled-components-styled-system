import React from "react";
import { StyledButton } from "./components/button/Button";
import Box from "./components/Box";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import ButtonStyledSystem from "./components/button-styled-system/ButtonStyledSystem";

const App: React.FC = () => {
  return (
    <div>
      <Sidebar />
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
