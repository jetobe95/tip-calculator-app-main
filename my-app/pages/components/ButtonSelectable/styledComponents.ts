import styled from "styled-components";

export const Container = styled.div<{ enabled?: boolean }>`
  width: 142px;
  padding: 0.4rem 0;
  font-size: 24px;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;
  outline:none;
  color: ${(props) => (props.enabled ? "#00474B" : "white")};
  background-color: ${(props) => (props.enabled ? "#26C2AE" : "#00474B")};
  `;


export const InputCustomTip = styled(Container)`
background-color: ${props => props.theme.input.backgroundColor};
padding-right: 1em;
color: #00474B;
text-align: end;
border:none;
&::placeholder{
  text-align: end;
  color:#547878;
}
`


export const GridGroup = styled.article`
display: grid;
grid-template-columns: repeat(2,1fr);
grid-gap: 1rem;
`
