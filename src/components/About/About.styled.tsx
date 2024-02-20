import styled from "styled-components";
import { primaryFont, robotoFont } from "../fonts";
import CatsPaws from "@/assets/paws.png";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 2.5fr;
  gap: 4.8rem;

  padding: 4.8rem 0;

  width: 100%;
  height: 100%;
`;

export const ImgWrapper = styled.div`
  border-radius: 0.8rem;
  height: 66.4rem;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  border-radius: 0.8rem;
`;

export const AboutTextWrapper = styled.div`
  /* padding: 5.6rem 2.4rem; */
  border-radius: 0.8rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  position: relative;

  background: url(${CatsPaws});
  background-size: contain;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: right;
`;

export const AboutHomeWrapper = styled.div`
  padding: 0 2.4rem;
  margin-top: 5.6rem;
`;

export const AboutTitle = styled.h1`
  font-family: ${robotoFont};
  font-weight: 500;
  font-size: 5.4rem;
  line-height: 1.11429;
  letter-spacing: 0.01em;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const AboutText = styled.p`
  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainTextColor};
`;

export const ProductsBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 1.2rem 2.4rem;
  background-color: ${(p) => p.theme.colors.signUpBgBtn};
  width: 24rem;
  border-radius: 0.8rem;
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;
  font-size: 1.6rem;
  font-family: ${primaryFont};
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.28px;

  transition: all var(--primary-transition);

  &:hover {
    background-color: ${(p) => p.theme.colors.signUpBgHoverBtn};
  }
`;
