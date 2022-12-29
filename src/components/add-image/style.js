import { StyleSheet } from "react-native";
import colors from "../../constants/theme/colors";

export const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        height: 280,
    },
    preview: {
        width: '100%',
        height: 200,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: colors.borderColor,
        borderWidth: 1,
    },
    message:{
        fontSize: 14,
        fontFamily: 'Lato-Bold',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});