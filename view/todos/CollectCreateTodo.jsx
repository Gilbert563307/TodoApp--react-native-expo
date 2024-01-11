import React, { useRef } from "react";
import { Text } from "react-native";
import { View } from "react-native";
import InputField from "../components/InputField";
import { TouchableOpacity } from "react-native";
import { styles } from "../../assets/css/CollectCreateTodo";
import { useTodosControllerContext } from "../../controller/TodosController";

export default function CollectCreateTodo({ navigation }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const { dispatch } = useTodosControllerContext();

  const createTodo = () => {

  }

  return (
    <View style={styles.container}>
      <InputField placeholder="Title" ref={titleRef}/>
      <InputField
        placeholder="Description"
        textarea={true}
        numberOfLines={10}
      />
      <TouchableOpacity style={styles.addBtn} onPress={createTodo}>
        <Text style={styles.btnText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}
