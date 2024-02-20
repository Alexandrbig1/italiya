import { useEffect, useRef, useState } from "react";
import {
  ThemeIconArrowDown,
  ThemeIconArrowUp,
  ThemeText,
  ThemeWrapper,
  ThemeMainText,
  ThemeModal,
  IconSun,
  IconMoon,
  IconCat,
} from "./Theme.styled";

function Theme({ toggleTheme }) {
  const [showTheme, setShowTheme] = useState(false);
  const [arrowTheme, setArrowTheme] = useState(false);
  const themeSwitcherRef = useRef(null);

  function toggleShowTheme() {
    setShowTheme((prevState) => !prevState);
    setArrowTheme((prevState) => !prevState);
  }

  function handleClickOutside(e) {
    if (
      themeSwitcherRef.current &&
      !themeSwitcherRef.current.contains(e.target)
    ) {
      setShowTheme(false);
      setArrowTheme(false);
    }
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Escape") {
        setShowTheme(false);
        setArrowTheme(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <ThemeWrapper onClick={toggleShowTheme} ref={themeSwitcherRef}>
      <ThemeMainText>Theme</ThemeMainText>
      {arrowTheme ? <ThemeIconArrowUp /> : <ThemeIconArrowDown />}

      {showTheme && (
        <ThemeModal>
          <ThemeText
            key="light"
            data-theme="light"
            onClick={(e) => toggleTheme(e)}
          >
            <IconSun />
          </ThemeText>
          <ThemeText
            key="dark"
            data-theme="dark"
            onClick={(e) => toggleTheme(e)}
          >
            <IconMoon />
          </ThemeText>
          <ThemeText
            key="cats"
            data-theme="cats"
            onClick={(e) => toggleTheme(e)}
          >
            <IconCat />
          </ThemeText>
        </ThemeModal>
      )}
    </ThemeWrapper>
  );
}

export default Theme;
