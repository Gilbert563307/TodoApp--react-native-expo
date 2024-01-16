import React from "react";
import { styles } from "../../assets/css/Button";
import { TouchableOpacity } from "react-native";
import { Text } from "react-native";

export default function Button({text, onPress}) {
  return (
    <TouchableOpacity style={styles.addBtn} onPress={onPress}>
      <Text style={styles.btnText}>{text}</Text>
    </TouchableOpacity>
  );
}
