import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    todoItem: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
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
    },
    totoBody: {
        //backgroundColor: "red",
        display: "flex",
        justifyContent: "space-evenly",
        width: "70%",
    },
    actions: {
        flex: 1,
        gap: "15em",
        flexDirection: "row",
        //backgroundColor: "green",
        width: "30%",
    },
    title: {
        color: "#9395D3",
        fontWeight: "600",
        fontSize: 19,
    },
    description: {
        fontWeight: "300",
    },
    flatList: {
        height: "93%",
        flexGrow: 0
    }
});

