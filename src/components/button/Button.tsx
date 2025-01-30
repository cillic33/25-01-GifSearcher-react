import {Props} from "./props";
import {FC} from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  background: #232367;
  padding: 10px 20px;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  margin: 3px;
  cursor: pointer;
`

export const Button: FC<Props> = ({title = "", onClick}) => {
  return (
    <StyledButton type="button" onClick={onClick}>{title}</StyledButton>
  );
}
