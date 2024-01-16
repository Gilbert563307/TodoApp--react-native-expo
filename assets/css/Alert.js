import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    alert: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        margin: 10,
        padding: 15,
        display: "flex",
        borderRadius: "5px",

    },
    info: {
        backgroundColor: "rgb(204,229,255)",
    },
    danger: {
        backgroundColor: "rgb(248,215,218)"
    },
    success: {
        backgroundColor: "rgb(212,237,218)",
    },
    alertText: {
        color: "#58151C",
    },
})