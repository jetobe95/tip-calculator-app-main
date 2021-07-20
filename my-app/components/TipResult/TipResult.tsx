import useAppState from "../../hooks/useAppState";
import ItemResume from "./ItemResume/ItemResume";
import { Button, Wrapper, ItemResumeContainer } from "./styledComponents";

export default function TipResult() {
  const { isValid, tipAmount, total, dispatch } = useAppState();
  return (
    <Wrapper>
      <ItemResumeContainer>
        <ItemResume money={tipAmount.toString()} title="Tip Amount" />
        <ItemResume money={total.toString()} title="Total" />
      </ItemResumeContainer>
      <Button disabled={!isValid} onClick={() => dispatch({ type: "RESET" })}>
        RESET
      </Button>
    </Wrapper>
  );
}
