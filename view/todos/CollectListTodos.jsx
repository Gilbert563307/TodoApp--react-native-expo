import React, { useEffect } from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/css/CollectListTodos";
import { SafeAreaView } from "react-native";
import Todos from "./Todos";
import BottomNavigation from "../components/BottomNavigation";

export default function CollectListTodos({ navigation }) {

  const createTodo = () => {
    navigation.navigate("CollectCreateTodo");
  }
  useEffect(() => {
    console.log(navigation);
  }, []);

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={[styles.h1, styles.colorWhite]}>TODO APP</Text>
        <TouchableOpacity style={styles.plusCircle} onPress={createTodo}>
          <Icon name="plus-circle" size={30} color="white"></Icon>
        </TouchableOpacity>
      </View>
      <Todos todos={[]} />
      <BottomNavigation></BottomNavigation>
    </SafeAreaView>
  );
}
