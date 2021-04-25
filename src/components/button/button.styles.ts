import styled, { css } from 'styled-components';
import { ButtonProps } from './Button';


export const BtnContainer = styled.button<ButtonProps>`
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.blues[3]};
  margin: 0 8px;
  padding: 8px 16px;
  &:hover {
    background-color: ${(props) => props.theme.colors.blues[5]};
  }
  ${(props) =>
    props.primary &&
    css`
      background-color: ${(props) => props.theme.colors.blues[6]};
      border: 2px solid ${(props) => props.theme.colors.blues[6]};
      color: #fff;
    `};
  ${(props) =>
    props.secondary &&
    css`
      background-color: ${(props) => props.theme.colors.greys[0]};
      color: #000;
    `};
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${(props) => props.theme.colors.greys[4]};
      color: black;
      border: 2px solid ${(props) => props.theme.colors.greys[4]};
      cursor: not-allowed;
      &:hover {
        background-color: ${(props) => props.theme.colors.greys[5]};
        color: #000;
      }
    `};
`;