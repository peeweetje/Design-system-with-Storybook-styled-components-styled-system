import React from "react";
import { StyledButton } from "./components/Button";
import Box from "./components/Box";
import Header from "./components/header";

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
    </div>
  );
};

export default App;
