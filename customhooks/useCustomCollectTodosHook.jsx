import React, { useEffect, useState } from "react";
import { useTodosControllerContext } from "../controller/TodosController";
import { ALERT_TYPES } from "../view/components/MyAlert";

export default function useCustomCollectTodosHook() {
  const [todos, setTodos] = useState([]);
  const [notification, setNotification] = useState(null);
  const { state } = useTodosControllerContext();

  const closeAlert = () => {
    setNotification(null);
  };

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
        setNotification({
          message: `Error retrieving todos, ${error.message}`,
          type: ALERT_TYPES.DANGER,
        });
      }
    };

    retrieveTodos();
  }, [state]);

  return { todos, notification, closeAlert };
}
