import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import uuid from "react-native-uuid";

export default function DataHandler() {
  //AsyncStorage.clear();
  const createData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
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

  const getRandomUuid = () => {
    return uuid.v4();
  };

  return {
    createData,
    readData,
    deleteData,
    updateData,
    getRandomUuid,
  };
}
