import {IProps} from "./props";
import {FC} from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px 12px;
  font-size: 18px;
  width: 300px;
  border-radius: 6px;
  border: 1px solid #333;
`

export const Input: FC<IProps> = ({value, onChange, placeholder = ""}) => {
  return (
    <StyledInput type="search" value={value} onChange={onChange} placeholder={placeholder} />
  );
}
