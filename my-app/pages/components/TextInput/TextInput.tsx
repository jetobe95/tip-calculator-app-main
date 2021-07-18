import { FC } from "react";
import Icon from "../Icon/Icon";
import { Input, InputContainer } from "./styledComponents";
interface TextInputProps {
  placeholder?: string;
  iconName?:string
}
const TextInput: FC<TextInputProps> = ({ placeholder,iconName }) => {
  return (
    <InputContainer>
      <Icon name='/icon-dollar.svg'/>
      <Input placeholder={placeholder} />
    </InputContainer>
  );
};

export default TextInput;
