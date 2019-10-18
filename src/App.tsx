import React from "react";
import { StyledButton } from "./Button";
import Box from "./Box";

const App: React.FC = () => {
  return (
    <div>
      <header>
        <StyledButton onClick={() => console.log("clicked")}>
          Styled button
        </StyledButton>
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
