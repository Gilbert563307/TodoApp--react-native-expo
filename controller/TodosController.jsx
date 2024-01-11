import React, { createContext, useReducer } from "react";
import TodosLogic from "../model/TodosLogic";

const TodosContext = createContext();

const initialState = {
  todo: {},
  todos: [],
  message: "",
};

export const TodoActions = {
  LIST: "LIST_TODOS",
};

export default function TodosController({ children }) {
  const { getAllTodos } = TodosLogic();

  const collectListTodos = () => {
    const todos = getAllTodos();
    return todos;
  };

  const handleRequest = async (state, action) => {
    switch (action.type) {
      case TodoActions.LIST:
        const list = await collectListTodos();
        return {
          ...state,
          todos: list.todos,
          message: list.message,
        };

      default:
        return state;
    }
  };

  const init = async (initialState) => {
    const todos = await collectListTodos();
    return { ...initialState, todos: todos.todos, message: todos.message };
  };

  const [state, dispatch] = useReducer(handleRequest, initialState, init);

  return (
    <TodosContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
}

export const useTodosControllerContext = () => {
  return useContext(TodosContext);
};
