"use client";
import { useEffect, useState } from "react";
import { useColorScheme } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";
import Cookie from "js-cookie";

export const ThemeModeToggle = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { mode, setMode } = useColorScheme();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // SSR Hydration flicker prevention
    let cookieStore;
    if (typeof window === "undefined") {
      const headers = require("next/headers");
      cookieStore = headers.cookies();
    }
    const themeMode = cookieStore?.get("themeMode")?.value || "light";

    return (
      <IconButton color="primary" size="small" disableTouchRipple>
        {themeMode === "dark" ? (
          <DarkModeOutlined fontSize="small" />
        ) : (
          <LightModeOutlined fontSize="small" />
        )}
      </IconButton>
    );
  }

  const setThemeMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    Cookie.set("themeMode", newMode);
  };

  return (
    <Tooltip
      title={mode === "dark" ? "Turn on the light" : "Turn off the light"}
    >
      <IconButton
        color="primary"
        size="small"
        disableTouchRipple
        disabled={!mode}
        onClick={setThemeMode}
      >
        {mode === "dark" ? (
          <DarkModeOutlined fontSize="small" />
        ) : (
          <LightModeOutlined fontSize="small" />
        )}
      </IconButton>
    </Tooltip>
  );
};
