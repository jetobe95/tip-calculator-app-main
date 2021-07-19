import { mediaQueries } from './../breakpoint';
import styled from "styled-components";

export const Container = styled.div<{ enabled?: boolean }>`
  width: 142px;
  padding: 0.4rem 0;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  outline: none;
  color: ${(props) => (props.enabled ? "#00474B" : "white")};
  background-color: ${(props) => (props.enabled ? "#26C2AE" : "#00474B")};
  cursor: pointer;
  user-select: none;
  &:active {
    transform: scale(0.96);
  }

  ${mediaQueries("md")`
    grid-template-columns: repeat(3, 1fr);
    width: 117px;
  `};
`;

export const InputCustomTip = styled(Container)`
  background-color: ${(props) => props.theme.input.backgroundColor};
  padding-right: 1em;
  color: #00474b;
  text-align: end;
  border: none;
  font-family: inherit;
  &::placeholder {
    text-align: end;
    font-family: inherit;
    color: #547878;
  }
  &:active {
    transform: none;
  }
  border:2px solid transparent;
  &:hover{
    border:2px solid #26C2AE;
  }
  
;
`;

export const GridGroup = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  
  ${mediaQueries("md")`
  grid-template-columns: repeat(3, 1fr);
  `};
`;
