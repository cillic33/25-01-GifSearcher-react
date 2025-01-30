import {Header} from "../header/Header";
import {Switcher} from "../switcher/Switcher";
import {Outlet} from "react-router-dom";
import {Wrapper} from "../wrapper/Wrapper";
import {ContentWrapper} from "../content-wrapper/ContentWrapper";

export const Layout = () => {
  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        <Switcher />
        <Outlet />
      </ContentWrapper>
    </Wrapper>
  );
}
