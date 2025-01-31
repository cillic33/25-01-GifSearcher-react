import {Props} from "./props";
import {FC} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background: #3c7f3c;
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  margin: 3px;
  cursor: pointer;
  
  &:hover {
    background: #65a165;
  }
`

export const Button: FC<Props> = ({title = "", onClick, style}) => {
  return (
    <StyledButton type="button" onClick={onClick} style={style || {}}>{title}</StyledButton>
  );
}
