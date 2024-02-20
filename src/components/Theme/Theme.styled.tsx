import styled from "styled-components";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { PiCatLight } from "react-icons/pi";
import { secondaryFont } from "../fonts";

export const ThemeIconArrowDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
`;

export const ThemeIconArrowUp = styled(MdOutlineKeyboardArrowUp)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
`;
export const ThemeMainText = styled.p`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColorLowOp};
  font-family: ${secondaryFont};
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.28px;
  transition: all var(--primary-transition);
`;

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  position: relative;

  &:hover {
    cursor: pointer;
    ${ThemeMainText} {
      color: ${(p) => p.theme.colors.mainHeaderTextColor};
    }
    ${ThemeIconArrowDown} {
      color: ${(p) => p.theme.colors.mainHeaderTextColor};
    }
    ${ThemeIconArrowUp} {
      color: ${(p) => p.theme.colors.mainHeaderTextColor};
    }
  }
`;

export const ThemeText = styled.p``;

export const ThemeModal = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: ${(p) => p.theme.colors.themeModalBg};

  display: flex;
  flex-direction: column;
  gap: 0.4rem;

  z-index: 5;
`;

export const IconSun = styled(FiSun)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainHeaderTextColorHover};
  }
`;

export const IconMoon = styled(FiMoon)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainHeaderTextColorHover};
  }
`;

export const IconCat = styled(PiCatLight)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.mainHeaderTextColorHover};
  }
`;
