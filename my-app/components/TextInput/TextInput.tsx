import { FC } from "react";
import Icon from "../Icon/Icon";
import { Input, InputContainer } from "./styledComponents";
export interface TextInputProps {
  placeholder?: string;
  iconName?: string;
  invalid?: boolean;
  onChange?(text: string): void;
  type?: string;
  value?: string | number;
}
const TextInput: FC<TextInputProps> = ({
  placeholder,
  iconName,
  invalid,
  onChange,
  type,
  value,
}) => {
  return (
    <InputContainer invalid={invalid}>
      <Icon name={iconName ?? ""} />
      <Input
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </InputContainer>
  );
};

export default TextInput;
