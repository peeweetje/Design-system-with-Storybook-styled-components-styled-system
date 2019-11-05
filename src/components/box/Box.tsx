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
  width,
  WidthProps,
  borderRadius,
  BorderRadiusProps,
} from "styled-system";

type BoxProps = SpaceProps &
  LayoutProps &
  ColorProps &
  FlexboxProps &
  WidthProps &
  BorderRadiusProps;

const Box = styled.div<BoxProps>`
  ${space}
  ${layout}
  ${color}
  ${flexbox}
  ${width}
  ${borderRadius}
`;

export default Box;
