import styled from "styled-components";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { FiSun, FiMoon } from "react-icons/fi";
import { PiCatLight } from "react-icons/pi";

export const ThemeWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;

  position: relative;

  &:hover {
    cursor: pointer;
  }
`;

export const ThemeMainText = styled.p`
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
  font-size: 1.8rem;
`;

export const ThemeIconArrowDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
`;

export const ThemeIconArrowUp = styled(MdOutlineKeyboardArrowUp)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};
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
