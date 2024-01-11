import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function DataHandler() {
  const createData = async (key, value) => {
    try {
      const created = await AsyncStorage.setItem("my-key", value);
      if (created != null) {
        return created;
      }
      return false;
    } catch (e) {
      console.log(
        `createData: failed creating data key:${key} value:${key}, error:${e} `
      );
      return false;
    }
  };

  const readData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        return value;
      }
      return null;
    } catch (error) {
      console.log(`readData: failed to red data key:${key}, error:${e} `);
      return null;
    }
  };

  const deleteData = () => {};

  const updateData = () => {};

  return {
    createData,
    readData,
    deleteData,
    updateData,
  };
}
