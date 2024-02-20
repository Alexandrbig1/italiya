import styled, { css } from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { robotoFont, secondaryFont } from "../../components/fonts";

export const ProductsContainer = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  padding: 0 2.4rem;

  overflow-y: scroll;
  scroll-behavior: smooth;
  height: 66.4rem;

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 12px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: transparent;
  }

  ${(p) =>
    p?.$scrollable &&
    css`
      &::-webkit-scrollbar-thumb {
        background-color: ${(p) => p.theme.colors.accentColor};
      }
      &::-webkit-scrollbar-track {
        background-color: ${(p) => p.theme.colors.scrollBgColor};
      }
    `}
`;

export const BackLinkWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0.8rem;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    cursor: pointer;
  }
`;

export const LinkBackIcon = styled(RiCloseLine)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.signUpBgBtn};
    transform: rotate(-90deg);
  }
`;

export const CardMenu = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
  row-gap: 3.2rem;
`;

export const CardTextContainer = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 9.4rem;

  position: relative;

  border-left: 1px solid white;
  border-right: 1px solid white;
  border-bottom: 1px solid white;

  border-bottom-left-radius: 0.8rem;
  border-bottom-right-radius: 0.8rem;

  background-color: ${(p) => p.theme.colors.mainBgColorLowOp};

  backdrop-filter: blur(1px);

  transition: all var(--primary-transition);
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  &:hover {
    ${CardTextContainer} {
      backdrop-filter: blur(100px);
    }
  }
`;

export const CardImgWrapper = styled.div`
  height: 36rem;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;

  border-top-left-radius: 0.8rem;
  border-top-right-radius: 0.8rem;

  overflow: hidden;

  position: relative;
`;

export const CardImgNews = styled.div`
  position: absolute;
  top: 0.4rem;
  left: 0.4rem;

  width: 4.2rem;
  height: 4.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.2rem;
  border-radius: 20rem;
  background-color: ${(p) => (p?.$cardsColors ? p?.$cardsColors : "")};

  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.33333;
  color: #fafafa;
`;

export const CardImg = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const CardTitle = styled.h3`
  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.33333;
  color: ${(p) => p.theme.colors.mainCardsTextColor};
`;

export const ColorContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

export const ColorWrapper = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  border-radius: 4px;
  border: 1px solid #b5ac9b;
  background-color: ${(p) => (p?.$cardsColors ? p?.$cardsColors : "")};
`;

export const ColorText = styled.span`
  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainCardsTextColor};
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.6rem 1.2rem;
  border-radius: 50rem;
  background-color: ${(p) => p.theme.colors.mainLogoColor};

  position: absolute;
  top: -50%;
  right: 0.4rem;

  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;

  z-index: 5;
`;

export const PriceDollar = styled.span`
  font-family: ${secondaryFont};
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainCardsTextColor};
  color: #fafafa;
`;

export const Price = styled.span`
  font-family: ${robotoFont};
  font-weight: 400;
  font-size: 1.6rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.mainCardsTextColor};
  color: #fafafa;
`;

export const AddBtn = styled.button`
  border: none;
  outline: none;
  background: none;
  padding: 0.6rem;
  cursor: pointer;

  position: absolute;
  top: 85%;
  left: 50%;

  transform: translateX(-50%);

  border-radius: 8px;

  width: calc(100% - 2.4rem);

  background-color: #d00000;
  color: #fafafa;
  transition: all var(--primary-transition);

  &:hover {
    background-color: #ef233c;
  }
`;
