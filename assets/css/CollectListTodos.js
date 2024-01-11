import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "#B3B7EE",
        height: 100,
    },
    header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#9395D3",
        paddingBottom: 12,
    },
    h1: {
        // marginTop: -3,
        marginLeft: 30,
        fontSize: 22,
        fontWeight: 700,
    },
    plusCircle: {
        // marginTop: 0,
        marginRight: 35,
        alignSelf: "flex-end",
    },
    colorWhite: {
        color: "#FFFFFF",
    }
});

