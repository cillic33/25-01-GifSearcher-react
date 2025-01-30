import {Props} from "./props";
import {FC} from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  width: 100%;
  padding: 40px 20px;
  box-sizing: border-box;
  background: #f7f7f7;
  text-align: center;
`

export const ContentWrapper: FC<Props> = ({children}) => {
  return (
    <StyledWrap>
      {children}
    </StyledWrap>
  );
}
