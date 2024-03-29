import React, { createContext, useReducer, useContext } from "react";
import TodosLogic from "../model/TodosLogic";
import { useNavigation } from "@react-navigation/native";
import { ALERT_TYPES } from "../view/components/MyAlert";

//create the 
const TodosContext = createContext();

//initial state for the context
const initialState = {
  todos: [],
  notification: {
    message: "",
    type: null,
  },
};

//todo actions so that every Todos view van use this object to access the cases in a switch
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
        //navigate to this view
        navigation.navigate("CollectListTodos");
        //payload contains a filter to show completed or not completed todos, the true means to reverse the list or not
        const list = await collectListTodos(action.payload, true);

        //... using the spread operator to update the state
        return {
          ...state,
          todos: list.todos,
          notification: { message: list.message, type: list?.type },
        };
      case TODOACTIONS.CREATE:
        console.log("creating todo")
        navigation.navigate("CollectListTodos");
        const created = await collectCreateTodo(action.payload);

        //do not filter the new list, and reverse the list so that recently created todo item comes up as first
        const todos = await collectListTodos(false, true);
        return {
          ...state,
          notification: { message: created?.message, type: created?.type },
          todos: todos.todos,
        };

      case TODOACTIONS.UPDATE:
        navigation.navigate("CollectListTodos");
        const updated = await CollectUpdateTodo(action.payload.todo);
        const updatedTodos = await collectListTodos(
          false,
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
        const newTodos = await collectListTodos(false, true);
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
    const todos = await collectListTodos(false, true);
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
