import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  margin: 0 auto;
  background-color: ${(p) => p.theme.colors.mainHeaderBg};
`;
export const FooterWrapper = styled.div`
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FooterBottom = styled.div`
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-top: 0.1px solid grey;
`;

export const PrivacyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
