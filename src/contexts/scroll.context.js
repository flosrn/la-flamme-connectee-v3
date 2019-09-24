import React, { useState, createContext } from "react";

export const ScrollContext = createContext();

export function ScrollProvider(props) {
  const [sectionId, setScroll] = useState("");
  const scrollToSection = sectionId => setScroll(sectionId);
  return (
    <ScrollContext.Provider value={{ sectionId, scrollToSection }}>
      {props.children}
    </ScrollContext.Provider>
  );
}
