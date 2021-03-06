import React, { createContext, useState } from "react";

export const UserContext = createContext([{}, () => {}]);

export const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    isLoggedIn: null,
    currentUser: null
  });
  return (
    <UserContext.Provider value={[state, setState]}>
      {children}
    </UserContext.Provider>
  );
};
