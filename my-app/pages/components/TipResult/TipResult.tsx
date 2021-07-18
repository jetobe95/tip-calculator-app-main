import ItemResume from "./ItemResume/ItemResume";
import { Button, Wrapper } from "./styledComponents";

export default function TipResult() {
  return (
    <Wrapper>
      <ItemResume/>
      <ItemResume/>
      <Button>Reset</Button>
    </Wrapper>
  );
}
