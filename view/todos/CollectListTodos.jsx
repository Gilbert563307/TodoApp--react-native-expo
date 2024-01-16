import React, { useEffect, useRef } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/css/CollectListTodos";
import { SafeAreaView } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Todos from "./Todos";
import useCustomCollectTodosHook from "../../customhooks/useCustomCollectTodosHook";
import MyAlert, { ALERT_TYPES } from "../components/MyAlert";

export default function CollectListTodos({ navigation }) {
  const { todos, notification } = useCustomCollectTodosHook();

  const createTodo = () => {
    navigation.navigate("CollectCreateTodo");
  };

  useEffect(() => {
    console.log(`CollectListTodos`, notification);
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={[styles.h1, styles.colorWhite]}>TODO APP</Text>
        <TouchableOpacity style={styles.plusCircle} onPress={createTodo}>
          <Icon name="plus-circle" size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>

      {notification && (
        <MyAlert message={notification?.message} type={notification?.type} />
      )}

      <Todos todos={todos} />
      <BottomNavigation></BottomNavigation>
    </SafeAreaView>
  );
}
