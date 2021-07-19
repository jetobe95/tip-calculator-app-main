import { FC } from "react";
import ErrorMessage from "../ErrorMessages/ErrorMessage";
import Label from "../Label/Label";
import TextInput from "../TextInput/TextInput";
import { LabelTextInputContainer, LabelContainer } from "./styledComponents";
interface LabelTextInputProps {
  label: string;
  placeholder?: string;
  invalid?: boolean;
  errorMessage?: string;
  iconName?: string;
}
const LabelTextInput: FC<LabelTextInputProps> = ({
  label,
  placeholder,
  invalid,
  errorMessage,
  iconName,
}) => {
  return (
    <LabelTextInputContainer>
      <LabelContainer>
        <Label title={label} />
        {invalid && <ErrorMessage message={errorMessage} />}
      </LabelContainer>
      <TextInput
        placeholder={placeholder}
        invalid={invalid}
        iconName={iconName??''}
      />
    </LabelTextInputContainer>
  );
};

export default LabelTextInput;
