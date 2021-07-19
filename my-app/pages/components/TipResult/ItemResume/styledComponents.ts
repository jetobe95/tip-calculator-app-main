import styled from "styled-components";


const green = '#26C2AE'
export const Wrapper = styled.div`
display: flex;
padding: 0.4rem;
justify-content: space-between;
`

export const ContainerLeading = styled.div`
flex-direction: column;
display: flex;
`


export const Title = styled.span`
color:white;
flex:1;
font-weight: 700;
`
export const Subtitle =  styled(Title)`
color:#7F9D9F;
font-size: .8125rem;
font-weight:700;
`


export const Number = styled.span`
color:${green};
font-size: 2em;
font-weight: 700;
`

