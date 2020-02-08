import React, { FC, useState } from "react";
import styled from "styled-components";
import { StyledButton } from "./components/button/Button";
import Box from "./components/box/Box";
import Header from "./components/header/Header";
import ButtonStyledSystem from "./components/button-styled-system/ButtonStyledSystem";
import Modal from "./components/modal/Modal";
import {
  BreadCrumb,
  BreadcrumbPortal,
} from "./components/breadcrumb/BreadCrumb";
import ClassyButton from "./components/classy-ui-button/classy-ui-button";

const App: FC = () => {
  const [showModal, setModal] = useState(false);
  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

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
      <ButtonStyledSystem onClick={closeModal} variant="primary">
        Primary
      </ButtonStyledSystem>
      <ClassyButton disabled={true}>Classy-UI</ClassyButton>
      {!showModal && (
        <Modal onClick={openModal}>
          <HeadingStyling>Modal heading</HeadingStyling>
          <ParStyling>This is modal content</ParStyling>
          <ButtonStyling onClick={closeModal}>X</ButtonStyling>
        </Modal>
      )}
      <BreadcrumbPortal />
      <BreadCrumb to="/one">BreadCrumb1</BreadCrumb>
      <BreadCrumb to="/two">BreadCrumb2</BreadCrumb>
      <BreadCrumb to="/two">BreadCrumb3</BreadCrumb>
    </AppStyling>
  );
};

export default App;

export const AppStyling = styled.div``;

export const HeadingStyling = styled.h1`
  justify-content: center;
  align-items: center;
`;

export const ParStyling = styled.p`
  justify-content: center;
  align-items: center;
`;

export const ButtonStyling = styled.button`
  width: 3em;
  height: 3em;
  border-radius: 3px;
  border: 2px solid ${props => props.theme.colors.blues[3]};
  cursor: pointer;
  background-color: ${props => props.theme.colors.blues[4]};
  &:hover {
    background-color: ${props => props.theme.colors.blues[3]};
  }
`;
