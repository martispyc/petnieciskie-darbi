import React, {useEffect, useState} from "react";
import {
  ProgressBarStyled,
  ProgressBarWrapper,
} from "./styles/ProgressBar.styled";

function ProgressBar() {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll/height) * 100;
    setScrollTop(scrolled);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scrol", onScroll);
  }, []);

  return (
    <ProgressBarWrapper>
      <ProgressBarStyled width={scrollTop}></ProgressBarStyled>
    </ProgressBarWrapper>
  );
}

export default ProgressBar;
