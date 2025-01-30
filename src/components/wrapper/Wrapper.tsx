import {Props} from "./props";
import {FC} from "react";
import styled from "styled-components";

const StyledWrap = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 20px auto;
`

export const Wrapper: FC<Props> = ({children}) => {
  return (
    <StyledWrap>
      {children}
    </StyledWrap>
  );
}
