import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";
import { Link, NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.colors.mainHeaderBg};
  width: 100%;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const HeaderMenuText = styled(Link)`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${secondaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainHeaderTextColor};
  }
`;

export const SignIn = styled(NavLink)`
  background-color: ${(p) => p.theme.colors.signInBgBtn};
  color: ${(p) => p.theme.colors.signTextBtn};
  border-radius: 0.8rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.signInBgHoverBtn};
  }
`;

export const SignUp = styled(NavLink)`
  background-color: ${(p) => p.theme.colors.signUpBgBtn};
  color: ${(p) => p.theme.colors.signTextBtn};
  border-radius: 0.8rem;
  padding: 0.6rem 1.2rem;
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
  cursor: pointer;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.signUpBgHoverBtn};
  }
`;
