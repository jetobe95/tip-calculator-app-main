import { Wrapper,Number, Title, Subtitle,ContainerLeading } from "./styledComponents";
export default function ItemResume() {
  return (
    <Wrapper>
      <div>
        <ContainerLeading>
          <Title>Tip amount</Title>
          <Subtitle>Total</Subtitle>
        </ContainerLeading>
        <Number>$4.27</Number>
      </div>
    </Wrapper>
  );
}
