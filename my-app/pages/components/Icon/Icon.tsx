import Image from "next/image";
import { FC } from "react";
interface IconProps{
    name:string
}
const Icon:FC<IconProps> = ({ name }) => {
  return  <Image src={name} alt={name} height={16} width={16}/>
};

export default Icon;
