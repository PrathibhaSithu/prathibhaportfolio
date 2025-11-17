import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header.jsx";
import SplashScreen from "../containers/SplashScreen/SplashScreen.jsx";
import { splashScreen } from "../portfolio";
import { useLocalStorage } from "../hooks/useLocalStorage.js";
import { StyleProvider } from "../contexts/StyleContext.jsx";
import "./Main.scss";

const Portfolio = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] = useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => clearTimeout(splashTimer);
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : ""}>
      <StyleProvider value={{ isDark, changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Portfolio;
