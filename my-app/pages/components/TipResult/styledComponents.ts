import styled from "styled-components";

export const Wrapper = styled.article`
  background-color: #00474b;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  padding:2.125rem 1.5rem;
`;

export const ItemResumeContainer = styled.div`
    padding-bottom:1rem;
`

export const Button = styled.button`
  background-color: #26c2ae;
  border: none;
  color: #00474b;
  font-size: 1.25rem;
  text-transform: capitalize;
  border-radius: 5px;
  width: 17.563rem;
  height: 3rem;
  align-self: center;
  font-family: inherit;
  font-weight: 700;

  &:hover{
      background-color: #9FE8DF;
      cursor: pointer;
  }
`;
