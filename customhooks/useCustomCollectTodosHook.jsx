import React, { useEffect, useState } from "react";
import { useTodosControllerContext } from "../controller/TodosController";

export default function useCustomCollectTodosHook() {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState(null);
  const { state } = useTodosControllerContext();

  useEffect(() => {
    const retrieveTodos = async () => {
      try {
        if (state instanceof Promise) {
          const handledState = await state;
          if (handledState.todos) {
            setTodos(handledState.todos);
            console.log("State is changing", handledState.todos);
          }

          if (handledState.message) {
            setMessage(handledState.message);
          }
        }
      } catch (error) {
        console.error("Error retrieving todos:", error);
        setMessage(`Error retrieving todos, ${error.message}}`);
      }
    };

    retrieveTodos();
  }, [state]);

  return { todos, message };
}
