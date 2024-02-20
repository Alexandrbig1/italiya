import {
  LogoWrapper,
  LogoIcon,
  LogoText,
  LogoLink,
  LogoIconWrapper,
  Paws,
} from "./Logo.styled";

function Logo() {
  return (
    <LogoWrapper>
      <LogoLink to="/italiya/" aria-label="Visit italiya.com Italiya's website">
        <LogoIconWrapper>
          <Paws></Paws>
          <LogoIcon />
        </LogoIconWrapper>
        <LogoText>Italiya</LogoText>
      </LogoLink>
    </LogoWrapper>
  );
}

export default Logo;
