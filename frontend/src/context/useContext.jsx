import { createContext, useState } from "react";

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [seeNav, setSeeNav] = useState(true);

  return (
    <NavContext.Provider value={{ seeNav, setSeeNav }}>
      {children}
    </NavContext.Provider>
  );
};
