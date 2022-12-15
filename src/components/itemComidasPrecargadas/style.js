import { StyleSheet } from "react-native";
import colors from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    listItem: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 10,
        elevation: 5,
    },
    itemText:{
        fontSize: 18,
        color: colors.textColor,
        fontFamily: 'Lato-Bold',
        paddingHorizontal: 10,
    },
})