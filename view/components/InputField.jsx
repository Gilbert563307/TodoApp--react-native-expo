import React from "react";
import { View } from "react-native";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

export default function InputField({
  placeholder,
  textarea = false,
  numberOfLines = 0,
}) {
  const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      padding: 10,
      borderColor: "#8B8787",
    },
    textAreaContainer: {
      margin: 12,
    },
    textArea: {
      height: 150,
      borderWidth: 1,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
    },
  });

  return (
    <View>
      {textarea ? (
        <View style={styles.textAreaContainer}>
          <TextInput
            multiline={true}
            placeholder={placeholder}
            numberOfLines={numberOfLines}
            style={styles.textArea}
          />
        </View>
      ) : (
        <View style={styles.input}>
          <TextInput placeholder={placeholder} />
        </View>
      )}
    </View>
  );
}
