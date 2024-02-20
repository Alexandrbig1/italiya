import { Link } from "react-router-dom";
import styled from "styled-components";
import { primaryFont, secondaryFont } from "../fonts";

export const FooterContainer = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.mainHeaderBg};
`;

export const FooterWrapper = styled.div`
  padding: 4.8rem 0 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterBottom = styled.div`
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 0.1px solid ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
`;

export const FooterText = styled.p`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${secondaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;
`;

export const PrivacyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
`;

export const PrivacyLink = styled(Link)`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainHeaderTextColor};
  }
`;

export const TermsLink = styled(Link)`
  font-size: 1.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainHeaderTextColor};
  }
`;
