import styled from "styled-components";
import { mediaQueries } from "./breakpoint";

export const Wrapper = styled.main`
  padding: 1rem;
  background-color: white;
  border-radius: 25px;
  ${mediaQueries("md")`
  display:grid;
  padding: 2rem;
  grid-template-columns: repeat(2,1fr);
  column-gap: 2.8rem;
    background: #FFFFFF;
    box-shadow: 0px 32px 43px rgba(79, 166, 175, 0.200735);
  `};
`;

export const RightSide = styled.aside`
${mediaQueries("md")`
  display:flex;
`};

`
export const LeftSide = styled.div``

export const SizedBox = styled.div`
  margin-bottom: 1em;
`;

export const Nav = styled.nav`
  margin: 2.5rem 0;
  ${mediaQueries("md")`
  margin: 1.75rem 0;
`};
`;
