import React from "react";
import DataHandler from "./DataHandler";

const TodosLogicKeys = {
  ALL_TODOS: "LIST",
};

export default function TodosLogic() {
  const { readData } = DataHandler();

  const getAllTodos = async () => {
    try {
      const todos = readData(TodosLogicKeys.ALL_TODOS);
      return { message: "", todos: todos };
    } catch (error) {
      return { message: error, todos: [] };
    }
  };

  return {
    getAllTodos,
  };
}
