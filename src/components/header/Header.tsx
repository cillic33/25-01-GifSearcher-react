import Logo from "/src/images/Logo.png";
import styled from "styled-components";
import {Link} from "react-router-dom";

const StyledImage = styled.img`
  display: block;
  margin: 0 auto;
  width: 100%;
  max-width: 641px;
`

const StyledHeader = styled.header`
  padding: 40px 20px;
  background: #fff;
`

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <StyledImage
          src={Logo}
          alt=""/>
      </Link>
    </StyledHeader>
  );
}
