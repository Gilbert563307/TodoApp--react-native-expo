import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CollectListTodos from "../view/todos/CollectListTodos";
import CollectCreateTodo from "../view/todos/CollectCreateTodo";
import CollectUpdateTodo from "../view/todos/CollectUpdateTodo";
import { styles } from "../assets/css/Layout";

const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="CollectListTodos">
      <Stack.Screen
        name="CollectListTodos"
        component={CollectListTodos}
        options={{
          headerShown: true,
          title: "",
          headerTransparent: true,
          headerStyle: styles.header,
        }}
      />
      <Stack.Screen
        name="CollectCreateTodo"
        component={CollectCreateTodo}
        options={{
          title: "Create",
          headerStyle: {
            backgroundColor: "#9395D3",
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      />
      <Stack.Screen
      name="CollectUpdateTodo"
      component={CollectUpdateTodo}
      options={{ 
        title: "Update",
        headerStyle: styles.header,
        headerTitleStyle: {
          color: "white",
        },
       }}
      />
    </Stack.Navigator>
  );
}
