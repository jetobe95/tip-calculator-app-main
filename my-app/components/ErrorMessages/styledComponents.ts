import styled from "styled-components";
import { LabelText } from "../Label/styledComponent";

export const Message = styled(LabelText)`
  color: ${({ theme }) => theme.input.invalidBorderColor};
`;
