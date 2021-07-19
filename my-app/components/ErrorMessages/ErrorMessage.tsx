import { FC } from "react";
import { Message } from "./styledComponents";
interface ErrorMessageProps {
  message?: string;
}
const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => {
  return <Message>{message}</Message>
};

export default ErrorMessage;
