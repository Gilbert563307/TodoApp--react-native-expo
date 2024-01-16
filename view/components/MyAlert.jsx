import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/css/Alert";
import { TouchableOpacity } from "react-native";
import MaterialIcon from "react-native-vector-icons/MaterialCommunityIcons";

export const ALERT_TYPES = {
  INFO: 0,
  DANGER: 1,
  SUCCESS: 2,
};

export default function MyAlert({
  message,
  type = ALERT_TYPES.INFO,
  closeAlert,
}) {
  const getAlertType = (type) => {
    switch (type) {
      case ALERT_TYPES.INFO:
        return styles.info;

      case ALERT_TYPES.DANGER:
        return styles.danger;

      case ALERT_TYPES.SUCCESS:
        return styles.success;

      default:
        return styles.info;
    }
  };
  const classToSet = getAlertType(type);

  return (
    <View>
      {message && (
        <View style={[styles.alert, classToSet]}>
          <Text style={styles.alertText}>{message} </Text>
          <TouchableOpacity onPress={closeAlert}>
            <MaterialIcon name="close" size={28} color="grey" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
