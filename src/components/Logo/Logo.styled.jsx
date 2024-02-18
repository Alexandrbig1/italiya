import styled from "styled-components";
import { BiSolidCat } from "react-icons/bi";
import { logoFont } from "../fonts";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LogoIcon = styled(BiSolidCat)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.accentColor};
`;

export const LogoText = styled.span`
  font-size: 2rem;
  color: white;
  font-family: ${logoFont};
`;
