import {IProps} from "./props";
import {FC} from "react";

export const Input: FC<IProps> = ({value, onChange, placeholder = ""}) => {
  return (
    <input type="search" value={value} onChange={onChange} placeholder={placeholder} />
  );
}
