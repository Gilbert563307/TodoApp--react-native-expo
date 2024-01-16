import React, { createContext, useReducer, useContext } from "react";
import TodosLogic from "../model/TodosLogic";
import { useNavigation } from "@react-navigation/native";
import { ALERT_TYPES } from "../view/components/MyAlert";

const TodosContext = createContext();

const initialState = {
  todos: [],
  notification: {
    message: "",
    type: null,
  },
};

export const TODOACTIONS = {
  LIST: "LIST_TODOS",
  CREATE: "CREATE_TODO",
  UPDATE: "UPDATE_TODO",
  DELETE: "DELETE_TODO",
};

export default function TodosController({ children }) {
  const navigation = useNavigation();
  const { getAllTodos, createTodo, updateTodo, deleteTodo } = TodosLogic();

  const collectListTodos = async (filter = null, reverse = true) => {
    const todos = await getAllTodos(filter, reverse);
    return todos;
  };

  const collectCreateTodo = async (todo) => {
    const todoCreated = await createTodo(todo);
    return todoCreated;
  };

  const CollectUpdateTodo = async (todo) => {
    const updated = await updateTodo(todo);
    return updated;
  };

  const collectDeleteTodo = async (todo) => {
    const deleted = await deleteTodo(todo);
    return deleted;
  };

  const handleRequest = async (state, action) => {
    switch (action.type) {
      case TODOACTIONS.LIST:
        navigation.navigate("CollectListTodos");
        const list = await collectListTodos(action.payload, true);
        return {
          ...state,
          todos: list.todos,
          notification: { message: list.message, type: list?.type },
        };
      case TODOACTIONS.CREATE:
        navigation.navigate("CollectListTodos");
        const created = await collectCreateTodo(action.payload);
        const todos = await collectListTodos(null, true);
        return {
          ...state,
          notification: { message: created?.message, type: created?.type },
          todos: todos.todos,
        };

      case TODOACTIONS.UPDATE:
        navigation.navigate("CollectListTodos");
        const updated = await CollectUpdateTodo(action.payload.todo);
        const updatedTodos = await collectListTodos(
          null,
          action.payload?.reverse
        );
        return {
          ...state,
          notification: { message: updated?.message, type: updated?.type },
          todos: updatedTodos.todos,
        };

      case TODOACTIONS.DELETE:
        navigation.navigate("CollectListTodos");
        const deleted = await collectDeleteTodo(action.payload);
        const newTodos = await collectListTodos();
        return {
          ...state,
          notification: { message: deleted.message, type: deleted?.type },
          todos: newTodos.todos,
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
