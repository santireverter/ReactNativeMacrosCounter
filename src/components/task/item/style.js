import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    listItemContainer: {
        paddingVertical: 20,
        backgroundColor: "#9a848f",
        borderRadius: 5,
        elevation: 5,
        justifyContent: 'center',
        marginVertical: 5,
    },
    itemText:{
        fontSize: 14,
        color: '#000',
        paddingHorizontal: 10,
    },
    listItem: {
        backgroundColor: '#f9c2ff',
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 5,
    },
    button:{
        borderRadius: 10,
    }
})