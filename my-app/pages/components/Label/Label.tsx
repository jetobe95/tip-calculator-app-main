import { FC } from "react";
import { LabelText } from "./styledComponent";

interface LabelProps {
  title: string;
}
const Label: FC<LabelProps> = ({ title }) => {
  return <LabelText>{title}</LabelText>;
};

export default Label;
