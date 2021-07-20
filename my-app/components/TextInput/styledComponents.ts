import styled from "styled-components";
const borderRadius = "5px";
export const InputContainer = styled.div<{ invalid?: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.input.backgroundColor};
  padding: 10px 19px;
  ${({ theme, invalid }) =>
    invalid ? `border: 2px solid ${theme.input.invalidBorderColor};` : ""}

  border-radius: ${borderRadius};
  cursor: pointer;
  border: 2px solid transparent;
  &:hover {
    border: 2px solid #26c2ae;
  }
`;

export const Input = styled.input`
  width: 100%;
  outline: none;
  border: none;
  font-family: inherit;
  background-color: transparent;
  font-size: 1.25em;
  color: #00474b;
  font-weight: bold;
  border-radius: ${borderRadius};
  text-align: end;
  

  &::placeholder {
    color: #00474b;
    opacity: 0.35;
  }
`;
