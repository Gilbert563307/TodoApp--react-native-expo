import React from "react";
import { View, Text } from "react-native";
import { styles } from "../../assets/css/Alert";

export const ALERT_TYPES = {
  INFO: 0,
  DANGER: 1,
  SUCCESS: 2,
};

export default function MyAlert({ message, type = ALERT_TYPES.INFO }) {
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
        </View>
      )}
    </View>
  );
}
