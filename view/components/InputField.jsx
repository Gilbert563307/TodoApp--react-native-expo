import React from "react";
import { View, TextInput, Text } from "react-native";
import { styles } from "../../assets/css/InputField";

export default function InputField({
  placeholder,
  textarea = false,
  numberOfLines = 0,
  onChangeFunction = null,
}) {
  return (
    <View>
      {textarea ? (
        <View style={styles.textAreaContainer}>
          {/* <Text>{placeholder}</Text> */}
          <TextInput
            multiline={true}
            placeholder={placeholder}
            numberOfLines={numberOfLines}
            style={styles.textArea}
            onChangeText={onChangeFunction}
          />
        </View>
      ) : (
        <View style={styles.input}>
          {/* <Text>{placeholder}</Text> */}
          <TextInput
            placeholder={placeholder}
            onChangeText={onChangeFunction}
          />
        </View>
      )}
    </View>
  );
}
