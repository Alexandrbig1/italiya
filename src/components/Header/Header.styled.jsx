import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${(p) => p.theme.colors.mainHeaderBg};
  width: 100%;
  margin: 0 auto;
`;

export const HeaderWrapper = styled.div`
  padding: 2.4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const HeaderMenuText = styled.p`
  font-size: 1.6rem;
  color: ${(p) => p.theme.colors.mainHeaderTextColor};

  &:hover {
    cursor: pointer;
  }
`;

export const SignIn = styled.button`
  outline: none;
  background: none;
  border: none;
  background-color: lightgoldenrodyellow;
  border-radius: 0.8rem;
  padding: 0.6rem 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;

export const SignUp = styled.button`
  outline: none;
  background: none;
  border: none;
  background-color: lightcoral;
  border-radius: 0.8rem;
  padding: 0.6rem 1.2rem;

  &:hover {
    cursor: pointer;
  }
`;
