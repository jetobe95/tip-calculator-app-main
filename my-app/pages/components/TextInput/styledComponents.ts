import styled from "styled-components";

export const InputContainer = styled.div`
display: inline-flex;
align-items: center;
background-color: ${props => props.theme.input.backgroundColor};
padding: 10px 19px;
`
export const Input = styled.input`
outline: none;
border: none;
font-family: inherit;
background-color: transparent;
font-size: 1.25em;
color: #00474B;
font-weight: bold;
border-radius: 5px;
text-align: end;

&::placeholder{
    color:#00474B;
    opacity: 0.35;
}
`