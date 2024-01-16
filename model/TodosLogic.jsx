import React from "react";
import DataHandler from "./DataHandler";

const TODOLOGICKYES = {
  ALL_TODOS: "LIST",
};

export default function TodosLogic() {
  const { readData, getRandomUuid, createData } = DataHandler();

  const getAllTodos = async () => {
    try {
      const todos = await readData(TODOLOGICKYES.ALL_TODOS);
      const data = todos != null ? JSON.parse(todos).reverse() : [];
      return { message: "", todos: data };
    } catch (error) {
      return { message: error.message, todos: [] };
    }
  };

  const checkIfUuidIsAvailable = async (uuid) => {
    try {
      const todosData = await getAllTodos();
      const todos = todosData.todos;

      if (todos && todos.length === 0) {
        return true;
      }

      const uuidExists = todos.filter((obj) => obj.uuid === uuid);

      if (uuidExists.length === 0) {
        return true;
      } else {
        // Assuming you want to return false only if there is exactly one matching UUID
        return false;
      }
    } catch (error) {
      console.error("Error checkIfUuidIsAvailable todos:", error);
      return false;
    }
  };

  const getAvailableUuid = async () => {
    const uuid = getRandomUuid();
    const uuidIsAvailable = await checkIfUuidIsAvailable(uuid);
    if (uuidIsAvailable) {
      return uuid;
    }
    return getAvailableUuid();
  };

  const getCurrentExistingTodos = (todos, payload) => {
    let newTodos;
    if (todos.length && todos.length === 0) {
      newTodos = [payload];
    } else {
      newTodos = [...todos, payload];
    }
    return newTodos;
  };

  const createTodo = async (todo) => {
    try {
      const todosData = await getAllTodos();
      const todos = todosData.todos;

      const uuid = await getAvailableUuid();
      const payload = {
        ...todo,
        uuid: uuid,
      };
      const newTodosObject = getCurrentExistingTodos(todos, payload);

      const created = await createData(
        TODOLOGICKYES.ALL_TODOS,
        JSON.stringify(newTodosObject)
      );

      return {
        message: created
          ? "Your todo has been created"
          : "Something went wrong",
        created: created,
      };
    } catch (error) {
      return { message: error.message, created: false };
    }
  };

  return {
    getAllTodos,
    createTodo,
  };
}
