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
}
const LabelTextInput: FC<LabelTextInputProps> = ({
  label,
  placeholder,
  invalid,
  errorMessage
}) => {
  return (
    <LabelTextInputContainer>
      <LabelContainer>
        <Label title={label} />
        {invalid && <ErrorMessage message={errorMessage}/>}
      </LabelContainer>
      <TextInput placeholder={placeholder} invalid={invalid} />
    </LabelTextInputContainer>
  );
};

export default LabelTextInput;
