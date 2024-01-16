import React, { createContext, useReducer, useContext } from "react";
import TodosLogic from "../model/TodosLogic";
import { useNavigation } from "@react-navigation/native";

const TodosContext = createContext();

const initialState = {
  todo: {},
  todos: [],
  message: "",
};

export const TODOACTIONS = {
  LIST: "LIST_TODOS",
  CREATE: "CREATE_TODO",
};

export default function TodosController({ children }) {
  const navigation = useNavigation();
  const { getAllTodos, createTodo } = TodosLogic();

  const collectListTodos = () => {
    const todos = getAllTodos();
    return todos;
  };

  const collectCreateTodo = async (todo) => {
    const todoCreated = await createTodo(todo);
    return todoCreated;
  };

  const handleRequest = async (state, action) => {
    switch (action.type) {
      case TODOACTIONS.LIST:
        const list = await collectListTodos();
        return {
          ...state,
          todos: list.todos,
          message: list.message,
        };
      case TODOACTIONS.CREATE:
        navigation.navigate("CollectListTodos");
        const created = await collectCreateTodo(action.payload);
        const todos = await collectListTodos();
        return {
          ...state,
          message: created?.message,
          todos: todos.todos,
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
