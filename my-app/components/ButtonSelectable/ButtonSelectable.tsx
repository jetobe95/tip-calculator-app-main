import { FC } from "react";
import { Container } from "./styledComponents";

interface  ButtonSelectableProps {
    enabled?:boolean,
    title:string
}

const   ButtonSelectable:FC<ButtonSelectableProps> =({enabled,title})=> {
  return <Container enabled={enabled}>{title}</Container>;
}

export default ButtonSelectable
