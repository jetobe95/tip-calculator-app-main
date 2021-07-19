import { FC } from "react";
import Icon from "../Icon/Icon";
import { Input, InputContainer } from "./styledComponents";
interface TextInputProps {
  placeholder?: string;
  iconName?:string,
  invalid?:boolean
}
const TextInput: FC<TextInputProps> = ({ placeholder,iconName,invalid }) => {
  return (
    <InputContainer invalid={invalid}>
      <Icon name='/icon-dollar.svg'/>
      <Input placeholder={placeholder} />
    </InputContainer>
  );
};

export default TextInput;
