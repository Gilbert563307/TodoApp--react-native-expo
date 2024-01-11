import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Landing from "../view/Landing";


const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen name="Landing" component={Landing} />
    </Stack.Navigator>
  );
}
