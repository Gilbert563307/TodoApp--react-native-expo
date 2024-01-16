import React from "react";
import DataHandler from "./DataHandler";
import { ALERT_TYPES } from "../view/components/MyAlert";

const TODOLOGICKYES = {
  ALL_TODOS: "LIST",
};

export default function TodosLogic() {
  const { readData, getRandomUuid, createData, updateData } = DataHandler();

  const getAllTodos = async () => {
    try {
      const todos = await readData(TODOLOGICKYES.ALL_TODOS);
      const data = todos != null ? JSON.parse(todos).reverse() : [];
      return { message: "", todos: data, type: null };
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
        type: created ? ALERT_TYPES.SUCCESS : ALERT_TYPES.DANGER,
      };
    } catch (error) {
      return {
        message: error.message,
        created: false,
        type: ALERT_TYPES.DANGER,
      };
    }
  };

  const updateTodo = async (todo) => {
    try {
      const todosData = await getAllTodos();
      const todos = todosData.todos;

      const updatedTodos = todos.map((tbuTodo) => {
        return tbuTodo.uuid === todo.uuid ? todo : tbuTodo;
      });

      const updated = await updateData(
        TODOLOGICKYES.ALL_TODOS,
        JSON.stringify(updatedTodos)
      );

      return {
        message: updated
          ? "Your todo has been updated"
          : "Something went wrong",
        updated: updated,
        type: updated ? ALERT_TYPES.SUCCESS : ALERT_TYPES.DANGER,
      };
    } catch (error) {
      return {
        message: error.message,
        updated: false,
        type: ALERT_TYPES.DANGER,
      };
    }
  };

  const deleteTodo = async (todo) => {
    try {
      const todosData = await getAllTodos();
      const todos = todosData.todos;

      const updatedTodos = todos.filter((tbuTodo) => tbuTodo.uuid != todo.uuid);

      const deleted = await updateData(
        TODOLOGICKYES.ALL_TODOS,
        JSON.stringify(updatedTodos)
      );

      return {
        message: deleted
          ? "Your todo has been deleted"
          : "Something went wrong",
        deleted: deleted,
        type: deleted ? ALERT_TYPES.SUCCESS : ALERT_TYPES.DANGER,
      };
    } catch (error) {
      return {
        message: error.message,
        deleted: false,
        type: ALERT_TYPES.DANGER,
      };
    }
  };

  return {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
  };
}
