import styled from 'styled-components';


export const AppStyling = styled.div`
   display: flex;
`

export const ButtonStyling = styled.button`
  width: 16px;
  height: 16px;
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.blues[3]};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.blues[4]};
  &:hover {
    background-color: ${(props) => props.theme.colors.blues[3]};
  }
`