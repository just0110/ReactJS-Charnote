import React, { createContext, useState } from "react";

export const UnitsContext = createContext([{}, () => {}]);

export const UnitsProvider = ({ children }) => {
  const [state, setState] = useState({
    units: [],
    currentUnit: null
  });

  return (
    <UnitsContext.Provider value={[state, setState]}>
      {children}
    </UnitsContext.Provider>
  );
};
