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
  title?:string
}
const ItemResume: FC<ItemResumeProps> = ({money,title}) => {
  return (
    <Wrapper>
      <ContainerLeading>
        <Title>{title}</Title>
        <Subtitle>/ person</Subtitle>
      </ContainerLeading>
      <Number>${money}</Number>
    </Wrapper>
  );
};

export default ItemResume;
