import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import InputField from "../components/InputField";
import { TouchableOpacity } from "react-native";
import { styles } from "../../assets/css/CollectCreateTodo";
import {
  TODOACTIONS,
  useTodosControllerContext,
} from "../../controller/TodosController";
import MyAlert, { ALERT_TYPES } from "../components/MyAlert";
import Button from "../components/Button";

export default function CollectCreateTodo({ navigation }) {
  const { dispatch } = useTodosControllerContext();
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [notification, setNotification] = useState(null);

  const createTodo = () => {
    if (!title || !description) {
      setNotification("You cannot create an empty todo");
      return;
    }

    const payload = {
      title: title,
      description: description,
      completed: false,
    };

    dispatch({ type: TODOACTIONS.CREATE, payload: payload });
  };

  return (
    <View>
      {notification && <MyAlert message={notification} type={ALERT_TYPES.DANGER} />}
      <InputField
        placeholder="Title"
        onChangeFunction={(text) => setTitle(text)}
      />
      <InputField
        placeholder="Description"
        textarea={true}
        numberOfLines={10}
        onChangeFunction={(text) => setDescription(text)}
      />
      <Button text="Add" onPress={createTodo}/>
    </View>
  );
}
