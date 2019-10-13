import styled from "styled-components";
import {ReactNode} from 'react';

export interface IButtonProps {
   /** Description of onClick function which returns void **/
   onClick: () => void;
   /** Description of children **/
   children?: ReactNode | null;
}

export const StyledButton = styled.button<IButtonProps>`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
