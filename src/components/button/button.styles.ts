import styled, { css } from 'styled-components';
import { ButtonProps } from './button';


export const BtnContainer = styled.button<ButtonProps>`
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.blue[5]};
  margin: 0 8px;
  padding: 8px 16px;
  &:hover {
    background-color: ${(props) => props.theme.colors.blue[5]};
  }
  ${(props) =>
    props.variant ==="primary" &&
    css`
      background-color: ${(props) => props.theme.colors.blue[6]};
      border: 2px solid ${(props) => props.theme.colors.blue[6]};
      color:  ${(props) => props.theme.colors.grey[0]};
    `};
  ${(props) =>
    props.variant==="secondary" &&
    css`
      background-color: ${(props) => props.theme.colors.grey[0]};
      color:${(props) => props.theme.colors.grey[9]};
      &:hover {
        color:  ${(props) => props.theme.colors.grey[0]};
      }
    `};
  ${(props) =>
    props.variant==="disabled" &&
    css`
      background-color: ${(props) => props.theme.colors.grey[4]};
      color: ${(props) => props.theme.colors.grey[0]};
      border: 2px solid ${(props) => props.theme.colors.grey[4]};
      cursor: not-allowed;
      &:hover {
        background-color: ${(props) => props.theme.colors.grey[5]};
        color: ${(props) => props.theme.colors.grey[0]};
      }
    `};
`;