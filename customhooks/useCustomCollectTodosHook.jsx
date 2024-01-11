import React, { useEffect, useState } from "react";
import { useTodosControllerContext } from "../controller/TodosController";

export default function useCustomCollectTodosHook() {
  const [todos, setTodos] = useState();
  const { state, dispatch } = useTodosControllerContext();

  useEffect(() => {
    
  }, [state]);
  return { todos };
}
