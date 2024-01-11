import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    todoItem: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#FFFFFF",
        padding: 15,
        height: 70,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        alignSelf: "flex-end",
    },
    totoBody: {
        display: "flex",
        justifyContent: "space-evenly",
    },
    actions: {
        flex: 1,
        gap: "15em",
        flexDirection: "row",
        alignSelf: "center",
        marginLeft: 50,
    },
    title: {
        color: "#9395D3",
        fontWeight: "600",
        fontSize: 19,
    },
    description: {
        fontWeight: "300",
    }
});

