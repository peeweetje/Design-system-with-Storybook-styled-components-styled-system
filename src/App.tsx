import React, { FC } from "react";
import styled from "styled-components";
import { StyledButton } from "./components/button/Button";
import Box from "./components/box/Box";
import Header from "./components/header/Header";
import ButtonStyledSystem from "./components/button-styled-system/ButtonStyledSystem";
import Modal from "./components/modal/Modal";

const App: FC = () => {
  return (
    <AppStyling>
      <Header>In the future component examples will be here!</Header>
      <StyledButton primary="primary" onClick={() => console.log("clicked")}>
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
      <Modal onClick={() => console.log("modal")}>I'm the Modal</Modal>
    </AppStyling>
  );
};

export default App;

export const AppStyling = styled.div``;
