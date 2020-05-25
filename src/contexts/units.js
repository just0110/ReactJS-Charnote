import React, { createContext, useReducer } from "react";

// page here for future integration with backend
// also if page used in useState hook in Table,
// it force update to 0 page when parent changed (sidebar open)
const initialState = {
  page: 0,
  units: [],
  currentUnit: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_PAGE":
      return { ...state, page: action.payload };
    case "SET_UNIT":
      return { ...state, currentUnit: action.payload };
    case "SET_UNITS":
      return { ...state, units: action.payload };
    case "UPDATE_STATE":
      return {
        ...state,
        units: action.payload.units,
        currentUnit: action.payload.unit
      };
    default:
      return { ...state };
  }
};

export const UnitsContext = createContext();

export const UnitsProvider = ({ children }) => {
  const unitReducer = useReducer(reducer, initialState);

  return (
    <UnitsContext.Provider value={unitReducer}>
      {children}
    </UnitsContext.Provider>
  );
};
