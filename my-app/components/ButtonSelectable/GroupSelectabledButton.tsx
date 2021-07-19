import ButtonSelectable from "./ButtonSelectable";
import { GridGroup, InputCustomTip } from "./styledComponents";

export default function GroupSelectabledButton() {
  const tips = [
    '5%',
    '10%',
    '15%',
    '25%',
    '50%',
  ]
  return (
    <GridGroup>
      {tips.map((tip,index)=> <ButtonSelectable enabled={index === 1} title={tip} key={tip} />)}
      <InputCustomTip as='input' placeholder='Custom' />
    </GridGroup>
  );
}
