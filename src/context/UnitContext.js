import React, { createContext, useState } from "react";

export const UnitContext = createContext();

export const UnitContextProvider = (props) => {
  const [unitList, setUnitList] = useState([]);

  return (
    <UnitContext.Provider
      value={{unitList, setUnitList}}
    >
      {props.children}
    </UnitContext.Provider>
  );
};
export default UnitContextProvider;