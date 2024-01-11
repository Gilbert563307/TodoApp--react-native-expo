import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Router from "./Router";
import TodosController from "./TodosController";

export default function MainController({ children }) {
  return (
    <NavigationContainer>
      <TodosController>
        <Router>{children}</Router>
      </TodosController>
    </NavigationContainer>
  );
}
