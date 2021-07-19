import ItemResume from "./ItemResume/ItemResume";
import { Button, Wrapper,ItemResumeContainer } from "./styledComponents";

export default function TipResult() {
  return (
    <Wrapper>
      <ItemResumeContainer>
        <ItemResume money={'4.27'}/>
        <ItemResume money={'32.79'}/>
      </ItemResumeContainer>
      <Button disabled>RESET</Button>
    </Wrapper>
  );
}
