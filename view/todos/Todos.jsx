import React from "react";
import { View, Alert, Text, FlatList, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../assets/css/Todos";
import {
  TODOACTIONS,
  useTodosControllerContext,
} from "../../controller/TodosController";

export default function Todos({ todos = [] }) {
  const { dispatch } = useTodosControllerContext();
  const navigation = useNavigation();
  const buttonSize = 25;

  const setText = (string) => {
    if (string.length > 20) {
      return `${string.substring(0, 20)}......`;
    }
    return string;
  };

  const editTodo = (todo) => {
    navigation.navigate("CollectUpdateTodo", todo);
  };

  const deleteTodo = (todo) => {
    dispatch({ type: TODOACTIONS.DELETE, payload: todo });
  };

  const askUserToDeleteTodo = (todo) => {
    Alert.alert("Are your sure?", "Confirm to delete this todo", [
      {
        text: "Confirm",
        onPress: () => deleteTodo(todo),
      },
      {
        text: "Cancel",
      },
    ]);
  };

  const askUserToCompleteTodo = (todo) => {
    Alert.alert("Are your sure?", "Confirm to complete this todo", [
      {
        text: "Confirm",
        onPress: () => completeTodo(todo),
      },
      {
        text: "Cancel",
      },
    ]);
  };

  const completeTodo = (todo) => {
    const payload = {
      ...todo,
      completed: true,
    };
    dispatch({ type: TODOACTIONS.UPDATE, payload: payload });
  };

  const Item = ({ todo }) => (
    <View style={styles.todoItem}>
      <View style={styles.totoBody}>
        <Text style={styles.title}>{todo.title}</Text>
        <Text style={styles.description}>{setText(todo.description)}</Text>
      </View>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => editTodo(todo)}>
          <Icon name="pencil" size={buttonSize} color="#B3B7EE"></Icon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => askUserToDeleteTodo(todo)}>
          <MaterialIcon
            name="delete"
            size={buttonSize}
            color="#B3B7EE"
          ></MaterialIcon>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => askUserToCompleteTodo(todo)}>
          <Icon name="check-circle" size={buttonSize} F color="#B3B7EE"></Icon>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      {todos && todos.length === 0 ? (
        <Text>No todos found...</Text>
      ) : (
        <FlatList
          style={styles.flatList}
          data={todos}
          renderItem={({ item }) => <Item todo={item} />}
        ></FlatList>
      )}
    </View>
  );
}
