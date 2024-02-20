import styled from "styled-components";
import { RiCloseLine } from "react-icons/ri";
import { robotoFont } from "../../components/fonts";

export const ProductsContainer = styled.div`
  display: block;
`;

export const BackLinkWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;

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
