import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/css/Alert";

export default function MyAlert({message}) {
  return (
    <View style={styles.alert}>
      <Text style={styles.alertText}>{message} </Text>
    </View>
  );
}
