import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: "space-evenly",
        backgroundColor: colors.secondary,
        margin: 0,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
})

