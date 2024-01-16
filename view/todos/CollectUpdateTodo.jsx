import React, { useState } from "react";
import { View } from "react-native";
import InputField from "../components/InputField";
import Button from "../components/Button";
import {
  TODOACTIONS,
  useTodosControllerContext,
} from "../../controller/TodosController";
import MyAlert, { ALERT_TYPES } from "../components/MyAlert";

export default function CollectUpdateTodo({ route }) {
  const { dispatch } = useTodosControllerContext();
  const [title, setTitle] = useState(route.params.title);
  const [description, setDescription] = useState(route.params.description);
  const [notification, setNotification] = useState(null);

  const updateTodo = () => {
    if (!title || !description) {
      setNotification("You cannot update the todo with empty fields");
      return;
    }

    const payload = {
      uuid: route.params.uuid,
      title: title,
      description: description,
    };

    dispatch({ type: TODOACTIONS.UPDATE, payload: payload });
  };

  return (
    <View>
      {notification && <MyAlert message={notification} type={ALERT_TYPES.DANGER} />}
      <InputField
        placeholder="Title"
        defaultValue={title}
        onChangeFunction={(title) => setTitle(title)}
      />

      <InputField
        placeholder="Description"
        textarea={true}
        numberOfLines={10}
        defaultValue={description}
        onChangeFunction={(description) => setDescription(description)}
      />
      <Button text="Update" onPress={updateTodo} />
    </View>
  );
}
