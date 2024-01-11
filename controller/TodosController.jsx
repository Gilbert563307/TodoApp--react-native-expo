import React, { createContext, useEffect } from "react";


const TodosContext = createContext();
export default function TodosController({ children }) {

  return (
    <TodosContext.Provider  value={{  }}>
      {children}
    </TodosContext.Provider>
  );
}

export const useTodosContext = () => {
  return useContext(TodosContext);
}
