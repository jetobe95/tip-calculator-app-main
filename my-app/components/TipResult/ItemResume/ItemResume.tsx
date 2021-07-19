import { FC } from "react";
import {
  Wrapper,
  Number,
  Title,
  Subtitle,
  ContainerLeading,
} from "./styledComponents";
interface ItemResumeProps {
  money?:string
}
const ItemResume: FC<ItemResumeProps> = ({money}) => {
  return (
    <Wrapper>
      <ContainerLeading>
        <Title>Tip amount</Title>
        <Subtitle>/ person</Subtitle>
      </ContainerLeading>
      <Number>${money}</Number>
    </Wrapper>
  );
};

export default ItemResume;
