import styled from "styled-components";
import { BiSolidCat } from "react-icons/bi";
import { logoFont } from "../fonts";
import { Link } from "react-router-dom";

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const LogoIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.4rem;
  background-color: ${(p) => p.theme.colors.mainLogoTextColorLowOp};
  border-radius: 50rem;

  position: relative;
`;

export const Paws = styled.div`
  position: absolute;
  top: -50%;
  left: 50%;

  transform: translateX(-50%);

  width: 1.2rem;
  height: 1.2rem;
  background-color: ${(p) => p.theme.colors.mainLogoTextColorLowOp};
  border-radius: 20rem;

  &::before {
    content: "";
    position: absolute;
    top: 70%;
    left: -140%;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 20rem;
    background-color: ${(p) => p.theme.colors.mainLogoTextColorLowOp};
  }

  &::after {
    content: "";
    position: absolute;
    top: 70%;
    left: 140%;
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 20rem;
    background-color: ${(p) => p.theme.colors.mainLogoTextColorLowOp};
  }
`;

export const LogoIcon = styled(BiSolidCat)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainLogoColor};
`;

export const LogoText = styled.span`
  font-size: 2rem;
  color: ${(p) => p.theme.colors.mainLogoTextColor};
  font-family: ${logoFont};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1;
  letter-spacing: -1.48px;
`;

export const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
