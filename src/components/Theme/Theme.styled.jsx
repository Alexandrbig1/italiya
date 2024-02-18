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
  color: ${(p) => p.theme.colors.white};
  font-size: 1.8rem;
`;

export const ThemeIconArrowDown = styled(MdOutlineKeyboardArrowDown)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.white};
`;

export const ThemeIconArrowUp = styled(MdOutlineKeyboardArrowUp)`
  font-size: 1.8rem;
  color: ${(p) => p.theme.colors.white};
`;

export const ThemeText = styled.p`
  color: ${(p) => p.theme.colors.white};
  font-size: 1.8rem;

  transition: all var(--primary-transition);

  &:hover {
    color: ${(p) => p.theme.colors.black};
    cursor: pointer;
  }
`;

export const ThemeModal = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1.2rem;
  border-radius: 0.8rem;
  background-color: lightgrey;

  z-index: 5;

  border: 1px solid grey;
`;

export const IconSun = styled(FiSun)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.black};
`;

export const IconMoon = styled(FiMoon)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.black};
`;

export const IconCat = styled(PiCatLight)`
  font-size: 2.4rem;
  color: ${(p) => p.theme.colors.black};
`;
