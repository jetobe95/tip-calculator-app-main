import { FC } from "react";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import { LabelTextInputContainer } from "./styledComponents";
interface LabelTextInputProps {
    label:string
    placeholder?:string
}
const LabelTextInput: FC<LabelTextInputProps> = ({label,placeholder}) => {
  return (
    <LabelTextInputContainer>
      <Label title={label}/>
      <TextInput placeholder={placeholder} />
    </LabelTextInputContainer>
  );
};

export default LabelTextInput;
