import { FC } from "react";
import ErrorMessage from "../ErrorMessages/ErrorMessage";
import Label from "../Label/Label";
import TextInput, { TextInputProps } from "../TextInput/TextInput";
import { LabelTextInputContainer, LabelContainer } from "./styledComponents";
interface LabelTextInputProps {
  label: string;
  placeholder?: string;
  invalid?: boolean;
  errorMessage?: string;
  iconName?: string;
  textInputProps?: TextInputProps;
}
const LabelTextInput: FC<LabelTextInputProps> = ({
  label,
  invalid,
  errorMessage,
  textInputProps,
}) => {
  return (
    <LabelTextInputContainer>
      <LabelContainer>
        <Label title={label} />
        {invalid && <ErrorMessage message={errorMessage} />}
      </LabelContainer>
      <TextInput
        {...textInputProps}
      />
    </LabelTextInputContainer>
  );
};

export default LabelTextInput;
