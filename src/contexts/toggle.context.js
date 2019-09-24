import React, { useState, createContext } from "react";

export const ToggleContext = createContext();

export function ToggleProvider({ children }) {
  const [isVisible, setToggle] = useState(false);
  const toggle = () => setToggle(!isVisible);

  return <ToggleContext.Provider value={{ isVisible, toggle }}>{children}</ToggleContext.Provider>;
}
