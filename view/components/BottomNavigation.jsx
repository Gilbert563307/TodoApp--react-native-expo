import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import {
  TODOACTIONS,
  useTodosControllerContext,
} from "../../controller/TodosController";

export default function BottomNavigation() {
  const { dispatch } = useTodosControllerContext();
  const [selectedTab, setSelectedTab] = useState(0);
  const tabs = [
    {
      name: "All",
      url: "",
      icon: { name: "list", size: 30 },
      filter: undefined,
    },
    {
      name: "Completed",
      url: "",
      icon: { name: "check", size: 30 },
      filter: { completed: true },
    },
  ];

  const handleUrlRequest = (selectedTab, tab) => {
    setSelectedTab(selectedTab);
    dispatch({ type: TODOACTIONS.LIST, payload: tab.filter });
  };

  const styles = StyleSheet.create({
    container: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: 15,
      height: 90,
      backgroundColor: "#FFFFFF",
    },
    tabs: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    tab: {
      display: "flex",
      alignItems: "center",
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {tabs.map((tab, index) => {
          return (
            <TouchableOpacity
              key={index}
              style={[styles.tab]}
              onPress={() => handleUrlRequest(index, tab)}
            >
              <FeatherIcon
                name={tab.icon.name}
                size={tab.icon.size}
                color={selectedTab === index ? "#9395D3" : "black"}
              />
              <Text>{tab.name}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
