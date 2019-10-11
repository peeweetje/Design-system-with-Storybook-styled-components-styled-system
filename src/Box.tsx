import styled from "styled-components";
import {
  space,
  SpaceProps,
  layout,
  LayoutProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
} from "styled-system";

type BoxProps = SpaceProps & LayoutProps & ColorProps & FlexboxProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
`;

export default Box;
