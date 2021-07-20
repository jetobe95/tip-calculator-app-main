import { FC } from "react";
import { Container } from "./styledComponents";

interface  ButtonSelectableProps {
    enabled?:boolean,
    title:string;
    onClick():void
}

const   ButtonSelectable:FC<ButtonSelectableProps> =({enabled,title,onClick})=> {
  return <Container  onClick={onClick} enabled={enabled}>{title}</Container>;
}

export default ButtonSelectable
