import { LabelText } from '../Label/lib/styledComponent';
import styled from "styled-components";

export const Message = styled(LabelText)`
  color: ${({ theme }) => theme.input.invalidBorderColor};
`;
