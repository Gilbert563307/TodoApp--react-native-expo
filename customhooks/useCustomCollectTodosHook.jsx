import React, { useEffect, useState } from "react";
import { useTodosControllerContext } from "../controller/TodosController";

export default function useCustomCollectTodosHook() {
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState(null);
  const { state } = useTodosControllerContext();

  useEffect(() => {
    const retrieveTodos = async () => {
      try {
        if (state instanceof Promise) {
          const handledState = await state;
          if (handledState.todos) {
            setTodos(handledState.todos);
          }

          if (handledState.notification) {
            setNotification(handledState.notification);
          }
        }
      } catch (error) {
        console.error("Error retrieving todos:", error);
        setMessage(`Error retrieving todos, ${error.message}}`);
      }
    };

    retrieveTodos();
  }, [state]);

  return { todos, notification };
}
