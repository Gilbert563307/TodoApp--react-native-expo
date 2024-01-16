import React, { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { FlatList } from "react-native";
import { Text } from "react-native";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

import { styles } from "../../assets/css/Todos";

export default function Todos({ todos = [] }) {
  const buttonSize = 25;

  const setText = (string) => {
    if (string.length > 20) {
      return `${string.substring(0, 20)}......`;
    }
    return string;
  };

  useEffect(() => {
    console.log(todos);
  }, []);

  const Item = ({ title, description }) => (
    <View style={styles.todoItem}>
      <View style={styles.totoBody}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{setText(description)}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity>
          <Icon name="pencil" size={buttonSize} color="#B3B7EE"></Icon>
        </TouchableOpacity>
        <TouchableOpacity>
          <MaterialIcon
            name="delete"
            size={buttonSize}
            color="#B3B7EE"
          ></MaterialIcon>
        </TouchableOpacity>
        <TouchableOpacity>
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
          data={todos}
          renderItem={({ item }) => (
            <Item title={item.title} description={item.description} />
          )}
        ></FlatList>
      )}
    </View>
  );
}
