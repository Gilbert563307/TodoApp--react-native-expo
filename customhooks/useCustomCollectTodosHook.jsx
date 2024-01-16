import React, { useEffect, useState } from "react";
import { useTodosControllerContext } from "../controller/TodosController";

export default function useCustomCollectTodosHook() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const { state } = useTodosControllerContext();

  useEffect(() => {
    const retrieveTodos = async () => {
      if (state instanceof Promise) {
        state.then((handledState) => {
          if (handledState.todos) {
            setTodos(handledState.todos);
            console.log(`state is changing`, handledState.todos);
          }

          if (handledState.message) {
            setMessage(handledState.message);
          }
        });
      }
    };
    retrieveTodos();
  }, [state]);
  return { todos, message };
}
