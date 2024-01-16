import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/css/CollectListTodos";
import { SafeAreaView } from "react-native";
import BottomNavigation from "../components/BottomNavigation";
import Todos from "./Todos";
import useCustomCollectTodosHook from "../../customhooks/useCustomCollectTodosHook";
import MyAlert from "../components/MyAlert";

export default function CollectListTodos({ navigation }) {
  const { todos, message } = useCustomCollectTodosHook();

  const createTodo = () => {
    navigation.navigate("CollectCreateTodo");
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={[styles.h1, styles.colorWhite]}>TODO APP</Text>
        <TouchableOpacity style={styles.plusCircle} onPress={createTodo}>
          <Icon name="plus-circle" size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>

      {message && <MyAlert message={message} />}
      <Todos todos={todos} />
      <BottomNavigation></BottomNavigation>
    </SafeAreaView>
  );
}
